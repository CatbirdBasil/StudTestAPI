import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Trip} from "@models/trip";
import {TripService} from "@services/trip.service";
import {Router} from "@angular/router";
import {Suggestion} from "@models/suggestion";
import {CustomValidators} from "@helpers/CustomValidators";
import {Service} from "@models/service";
import {Country} from "@models/country";
import {City} from "@models/city";
import {CountryService} from "@services/country.service";
import {CityService} from "@services/city.service";
import {NgSelectComponent} from "@ng-select/ng-select";
import {FileInfo} from "@models/file-info";
import {GoogleDriveService} from "@services/google-drive.service";
import {GOOGLE_DRIVE_PICTURE_BASE_URL} from "@environments/environment";
import {Md5} from "ts-md5";

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {

  @ViewChild('myNgSelect') myNgSelectComponent: NgSelectComponent;

  @Input() trip: Trip;

  @Output() onEdit = new EventEmitter<Trip>();
  @Output() onArchivedEdit = new EventEmitter<Trip>();

  tripForm: FormGroup;
  public submitted = false;
  error = '';
  draftLoading = false;
  openLoading = false;

  archivedEdit: boolean = false;

  canBeDrafted: boolean = false;

  readonly TripType = 'Trip';
  readonly SuggestionType = 'Suggestion';
  readonly ServiceType = 'Service';

  readonly DraftStatus = 'Draft';
  readonly OpenedStatus = 'Open';

  currentStatus = this.OpenedStatus;
  currentPicture: FileInfo = null;
  currentPictureInputPlaceholder: string;

  availableServices: Service[];

  countries: Country[] = null;
  locationAvailableCities: City[] = null;
  destinationAvailableCities: City[] = null;

  countriesLoading: boolean = false;
  locationCitiesLoading: boolean = false;
  destinationCitiesLoading: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private tripService: TripService,
              private countryService: CountryService,
              private cityService: CityService,
              private router: Router,
              private fileUploader: GoogleDriveService) {
  }

  get formControl() {
    return this.tripForm.controls;
  }

  ngOnInit() {

    this.canBeDrafted = !this.trip || this.trip.status == "Draft";
    this.currentPictureInputPlaceholder = 'Choose file';

    this.countriesLoading = true;
    this.countryService.getAllCountries().subscribe(
      data => {
        this.countries = data;
        this.countriesLoading = false;

        if (this.trip != null) {
          (<FormGroup> (<FormGroup> this.tripForm.controls.location).controls.country).controls.name
            .patchValue(this.trip.location.country.name);

          (<FormGroup> (<FormGroup> this.tripForm.controls.destination).controls.country).controls.name
            .patchValue(this.trip.destination.country.name);

          (<FormGroup> this.tripForm.controls.location).controls.name.patchValue(this.trip.location.name);
          (<FormGroup> this.tripForm.controls.destination).controls.name.patchValue(this.trip.destination.name);
        }
      },
      err => this.handleError(err)
    );

    if (this.trip) {
      this.initTrip();
    } else {

      this.tripForm = this.formBuilder.group({

        id: [0],
        name: ['', [CustomValidators.required, Validators.minLength(3), Validators.maxLength(64)]],
        location: this.formBuilder.group({
          name: [null, [Validators.required]],
          country: this.formBuilder.group({
            name: [null, [Validators.required]],
            id: []
          }),
          countryId: [],
          coordinateId: [],
          id: []
        }),
        destination: this.formBuilder.group({
          name: [null, [Validators.required]],
          country: this.formBuilder.group({
            name: [null, [Validators.required]],
            id: []
          }),
          countryId: [],
          coordinateId: [],
          id: []
        }),
        numberOfPeople: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
        price: [0, [Validators.required, Validators.min(1), Validators.max(10000000)]],
        description: ['', [Validators.maxLength(2048)]],
        imgSrc: [null],
        oneWay: [false, [Validators.required]],
        suggestions: this.formBuilder.array([]),

        approverId: [null],
        providerId: [0],
        type: [this.TripType],
        status: []
      });
    }

    this.tripForm.controls['suggestions'].patchValue([{submitted: this.submitted}]);

    (<FormGroup> (<FormGroup> this.tripForm.controls.location).controls.country).controls.name.valueChanges
      .subscribe(
        data => {
          this.locationAvailableCities = null;
          (<FormGroup> this.tripForm.controls.location).controls.name.patchValue(null);

          if (data != null) {
            this.locationCitiesLoading = true;
            this.cityService.getCitiesByCountryId(this.countries.find((country) => country.name === data).id)
              .subscribe(
                cities => {
                  this.locationAvailableCities = cities;
                  this.locationCitiesLoading = false;
                },
                err => this.handleError(err)
              )
          }
        },
        err => this.handleError(err)
      );

    (<FormGroup> (<FormGroup> this.tripForm.controls.destination).controls.country).controls.name.valueChanges
      .subscribe(
        data => {
          this.destinationAvailableCities = null;
          (<FormGroup> this.tripForm.controls.destination).controls.name.patchValue(null);

          if (data != null) {
            this.destinationCitiesLoading = true;
            this.cityService.getCitiesByCountryId(this.countries.find((country) => country.name === data).id)
              .subscribe(
                cities => {
                  this.destinationAvailableCities = cities;
                  this.destinationCitiesLoading = false;
                },
                err => this.handleError(err)
              );
          }
        },
        err => this.handleError(err)
      );

    this.tripService.getAvailableServices().subscribe(data => {
        this.availableServices = data;
      },
      err => {
        alert(this.error);
      }
    );

  }

  ngAfterViewInit() {
    this.myNgSelectComponent.virtualScroll = true;
  }

  get locationControls() {
    return (<FormGroup> this.tripForm.controls.location).controls;
  }

  get locationCountryControls() {
    return (<FormGroup> this.locationControls.country).controls;
  }

  get destinationControls() {
    return (<FormGroup> this.tripForm.controls.destination).controls;
  }

  get destinationCountryControls() {
    return (<FormGroup> this.destinationControls.country).controls;
  }

  get suggestionControls() {
    return (<FormGroup> this.tripForm.controls.suggestions).controls;
  }

  initSuggestion() {
    return this.formBuilder.group({
      id: [0],
      name: ['', [CustomValidators.required, Validators.minLength(2), Validators.maxLength(64)]],
      description: ['', [Validators.maxLength(2048)]],
      services: this.formBuilder.array([]),

      type: [this.SuggestionType],
      status: [this.currentStatus],
      approverId: [null],
      providerId: [0],
      location: [this.tripForm.get('location').value],
      numberOfPeople: [this.tripForm.get('numberOfPeople').value],
      price: [],
      oneWay: [this.tripForm.get('oneWay').value],

      submitted: [false]
    });
  }

  addSuggestion() {
    const suggestionControl = <FormArray>this.tripForm.controls['suggestions'];
    const suggestion = this.initSuggestion();

    suggestionControl.push(suggestion);
  }

  openSave() {

    this.currentStatus = this.OpenedStatus;
    this.openLoading = true;

    this.save();
  }

  draftSave() {

    this.currentStatus = this.DraftStatus;
    this.draftLoading = true;

    this.save();
  }

  removeSuggestion(index: number) {
    const control = <FormArray>this.tripForm.controls.suggestions;
    control.removeAt(index);
  }

  handleError(err: string) {
    this.error = err;
    this.openLoading = false;
    this.draftLoading = false;
    window.setTimeout(() => {
      this.error = '';
    }, 5000);
  }

  initTrip() {
    let tripGroup = this.initPredefinedTrip();
    let suggestionsArray = (<FormArray>tripGroup.controls.suggestions);

    for (let suggestion of this.trip.suggestions) {

      let suggestionControl = this.initPredefinedSuggestion(suggestion);

      let servicesArray = (<FormArray>suggestionControl.controls.services);

      for (let service of suggestion.services) {
        servicesArray.push(this.initPredefinedService(service));
      }

      suggestionsArray.push(suggestionControl);
    }

    this.tripForm = tripGroup;
  }

  initPredefinedTrip() {
    return this.formBuilder.group({
      id: [this.trip.id],
      name: [this.trip.name, [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      location: this.formBuilder.group({
        name: [null, [Validators.required]],
        country: this.formBuilder.group({
          name: [null, [Validators.required]],
          id: [0]
        }),
        countryId: [0],
        coordinateId: [0],
        id: [0]
      }),
      destination: this.formBuilder.group({
        name: [null, [Validators.required]],
        country: this.formBuilder.group({
          name: [null, [Validators.required]],
          id: [0]
        }),
        countryId: [0],
        coordinateId: [0],
        id: [0]
      }),
      numberOfPeople: [this.trip.numberOfPeople, [Validators.required, Validators.min(1), Validators.max(10)]],
      price: [this.trip.price, [Validators.required, Validators.min(1), Validators.max(10000000)]],
      description: [this.trip.description, [Validators.maxLength(2048)]],
      oneWay: [this.trip.oneWay, [Validators.required]],
      suggestions: this.formBuilder.array([]),
      imgSrc: [this.trip.imgSrc],

      approverId: [this.trip.approverId],
      providerId: [this.trip.providerId],
      type: [this.trip.type],
      status: [this.trip.status]
    });
  }

  initPredefinedSuggestion(suggestion: Suggestion) {
    return this.formBuilder.group({
      id: [suggestion.id],
      name: [suggestion.name, [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      description: [suggestion.description, [Validators.maxLength(2048)]],
      services: this.formBuilder.array([]),

      oneWay: [suggestion.oneWay],
      type: [suggestion.type],
      status: [suggestion.status],
      approverId: [suggestion.approverId],
      providerId: [suggestion.providerId],
      location: [suggestion.location],
      numberOfPeople: [suggestion.numberOfPeople],
      price: [suggestion.price],

      submitted: [false]
    });
  }

  initPredefinedService(service: Service) {
    return this.formBuilder.group({
      name: [service.name, [Validators.required, Validators.minLength(3)]],
      price: [service.price, [Validators.required, Validators.min(1), Validators.max(10000000)]],

      id: [service.id],
      type: [service.type],
      approverId: [service.approverId],
      providerId: [service.providerId],
      location: [service.location],
      status: [service.status],
      numberOfPeople: [0],
      oneWay: [service.oneWay],
      description: [null],

      submitted: [this.submitted],
      existingService: [null]
    });
  }

  save() {
    this.submitted = true;

    (<FormArray>this.tripForm.controls.suggestions).controls
      .forEach(entry => entry.patchValue({submitted: this.submitted}));

    if (this.tripForm.invalid) {
      this.openLoading = false;
      this.draftLoading = false;
      return;
    }

    if (this.currentPicture != null) {
      this.fileUploader.importFile(
        this.currentPicture,
        (err) => {
          this.handleError(err);
          return;
        },
        (res) => this.onImportComplete(res),
        (res) => {}
      );
      this.currentPicture = null;
      return;
    }

    if (this.tripForm.controls.status.value === 'Archived') {
      this.tripForm.controls.id.patchValue(0);

      (<FormArray>this.tripForm.controls.suggestions).controls
        .forEach(entry => entry
          .patchValue({id: 0}));

      this.archivedEdit = true;
    }

    this.tripForm
      .patchValue({status: this.currentStatus});

    (<FormArray>this.tripForm.controls.suggestions).controls
      .forEach(entry => entry
        .patchValue({numberOfPeople: this.tripForm.get('numberOfPeople').value}));

    (<FormArray>this.tripForm.controls.suggestions).controls
      .forEach(entry => entry
        .patchValue({location: this.tripForm.get('location').value}));

    (<FormArray>this.tripForm.controls.suggestions).controls
      .forEach(entry => entry
        .patchValue({status: this.currentStatus}));

    (<FormArray> this.tripForm.controls.suggestions).controls
      .forEach(entry => entry
        .patchValue({oneWay: this.tripForm.get('oneWay').value}));

    let trip = new Trip(this.tripForm.value);

    this.tripService.createOrUpdateTrip(trip).subscribe(
      (data) => {
        if (this.trip) {
          this.tripService.getTripById(data.id).subscribe(
            (actualTrip) => {
              if (this.archivedEdit) {
                this.router.navigate(['trip/' + data.id])
                  .finally( () => {this.onArchivedEdit.emit(actualTrip)});
              } else {
                this.onEdit.emit(actualTrip);
              }

            },
            (err) => this.handleError(err)
          )
        } else this.router.navigate(['trip/' + data.id]);
      }, err => {
        this.handleError(err);
      }
    );
  }


  // File upload section

  onFileChanged(event) {
    const file: File = event.target.files[0];

    let fileInfo: FileInfo = new FileInfo();

    this.currentPictureInputPlaceholder = file.name;

    let newName = Md5.hashStr(file.name) + Date.now().toString();

    fileInfo.Name = newName;
    fileInfo.Blob = file;

    this.currentPicture = fileInfo;
  }

  onImportComplete(res) {
    this.tripForm.controls.imgSrc.patchValue(GOOGLE_DRIVE_PICTURE_BASE_URL + JSON.parse(res).id);

    if (this.currentStatus === this.OpenedStatus) this.openSave();
    else this.draftSave();
  }

}
