import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BundleService} from "@services/bundle.service";
import {Trip} from "@models/trip";
import {TripService} from "@services/trip.service";
import {SearchService} from "@services/search.service";
import {SearchTrip, SearchTripMultiple} from "@models/tripSearch";
import {Router} from "@angular/router";
import {Bundle} from "@models/bundle";
import {CountryService} from "@services/country.service";
import {Country} from "@models/country";
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {

  tests: Test[]

  searchedByPrice: Array<Trip[]>;
  searchedByBundle: Array<Trip[]>;
  searchedByLength: Array<Trip[]>;

  sliderBundeles: Bundle[];
  trips: Trip[];
  filterForm: FormGroup;
  public submitted = false;

  result: number = 0;

  itemList = [];
  selectedItems = [];
  settings = {};

  countries: Country[];
  countriesLoading: boolean = false;
  searchInfo: SearchTrip;
  searchInfoMultiple: SearchTripMultiple;

  searchedByRating: Trip[];
  searchesByProvider: Trip[];
  searchedByDiscount: Trip[];
  loading = false;

  multiCountryModeControl: FormControl;

  @ViewChild("firstVideo") private video: ElementRef;

  constructor(private bundleService: BundleService,
              private tripService: TripService,
              private countryService: CountryService,
              private formBuilder: FormBuilder,
              private searchService: SearchService,
              private router: Router,
              private authService: AuthService) {
  }

  get authorized() {
    return this.authService.isSignedIn;
    // return this.authService.getDecodedToken() != null;
  }

  getBundle() {
    this.bundleService.getAllBundleWithImg().subscribe(res => {
      this.sliderBundeles = res;
    });
  }

  getTrips() {
    this.tripService.getAllTripsWithDetails().subscribe(res => {
      this.trips = res;
    });
  }

  getCountries() {
    this.countriesLoading = true;
    this.countryService.getAllCountries().subscribe(res => {
      this.countries = res;
      this.countriesLoading = false;
    });
  }

  //needed???
  getLocation() {
    this.searchService.getAllCountries().subscribe(res => {
      this.countries = res;
    });
  }

  intoTripPage(id) {
    this.router.navigate(['trip/' + id]);
  }


  ngOnInit() {

    this.getBundle();
    this.getTrips();
    this.getCountries();

    this.filterForm = this.initRegularSearchForm();

    this.result = 0;

    /*this.searchInfo = new class implements SearchTrip {
      destinationCountry: string;
      locationCountry: string;
      numberOfPeople: number;
      priceFrom: number;
      priceTo: number;
    };*/

    this.multiCountryModeControl = new FormControl(false);

    this.multiCountryModeControl.valueChanges.subscribe((data) => {
      if (data) {
        this.filterForm = this.initMultipleCountriesSearchForm();
      } else {
        this.filterForm = this.initRegularSearchForm();
      }
    });
    window.scrollTo(0, 0);
  }


  initRegularSearchForm(): FormGroup {
    return this.formBuilder.group({
      locationCountry: [null, [Validators.required]],
      destinationCountry: [null, [Validators.required]],
      numberOfPeople: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
      priceFrom: [0, [Validators.required, Validators.min(1), Validators.max(50000)]],
      priceTo: [0, [Validators.required, Validators.min(1), Validators.max(50000)]],
    });
  }

  initMultipleCountriesSearchForm(): FormGroup {
    return this.formBuilder.group({
      locationCountry: [[], [Validators.required]],
      destinationCountry: [[], [Validators.required]],
      numberOfPeople: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
      priceFrom: [0, [Validators.required, Validators.min(1), Validators.max(50000)]],
      priceTo: [0, [Validators.required, Validators.min(1), Validators.max(50000)]],
    });
  }


  save() {
    this.submitted = true;
    if (this.filterForm.invalid) {
      return;
    }

    if (this.multiCountryModeControl.value) {
      this.loading = true;
      this.result = 2;
      this.searchInfoMultiple = this.filterForm.value
      this.getSpecialSearch();
    } else {
      /*this.searchInfo.locationCountry = this.filterForm.controls.locCountry.value;
      this.searchInfo.destinationCountry = this.filterForm.controls.destCountry.value;
      this.searchInfo.numberOfPeople = this.filterForm.controls.numberOfPeople.value;
      this.searchInfo.priceTo = this.filterForm.controls.maxPrice.value;
      this.searchInfo.priceFrom = this.filterForm.controls.minPrice.value;*/

      this.searchInfo = this.filterForm.value;


      this.result = 1;
      this.getSearch();
    }
  }



  EmptyArray(controlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];

      if (control.errors && !control.errors.emptyArray) {

        return;
      }


      if ((<Array<string>>control.value).length == 0) {
        control.setErrors({emptyArray: true});
      } else {
        control.setErrors(null);
      }
    }
  }

  getSearch() {
    this.searchService.getSearchByDiscount(this.searchInfo).subscribe(res => {
      this.searchedByDiscount = res;
    });

    this.searchService.getSearchByProvider(this.searchInfo).subscribe(res => {
      this.searchesByProvider = res;
    });

    this.searchService.getSearchByRating(this.searchInfo).subscribe(res => {
      this.searchedByRating = res;
    });

  }

  getSpecialSearch() {
    this.searchService.getSearchByPrice(this.searchInfoMultiple).subscribe(res => {
      this.searchedByPrice = res;
    });
    //this.searchService.getSearchByBundle(this.searchInfoMultiple).subscribe(res => {
    //  this.searchedByBundle = res;
    //})
    this.searchService.getSearchByLength(this.searchInfoMultiple).subscribe(res => {
      this.searchedByLength = res;
      this.loading = false;
    });
  }

  intoBundlePage(id) {
    this.router.navigate(['bundle/' + id]);
  }
}

