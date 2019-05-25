import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "@helpers/CustomValidators";
import {Service} from "@models/service";

@Component({
  selector: 'app-trip-suggestion',
  templateUrl: './trip-suggestion.component.html',
  styleUrls: ['./trip-suggestion.component.scss']
})
export class TripSuggestionComponent implements OnInit {

  @Input() group: FormGroup;

  @Input() tripPrice: number;

  @Input() availableServices: Service[];

  constructor(private formBuilder: FormBuilder) {
  }

  get price() {

    let base = this.tripPrice + (<FormArray>this.group.controls.services).value
      .map(item => item.price)
      .reduce(function (a, b) {
        return a + b;
      }, 0);

    this.group.get('price').setValue(base);

    return base;
  }

  get submitted() {
    return this.group.controls['submitted'].value;
  }

  ngOnInit() {

    if ((<FormArray>this.group.controls.services).length == 0) {
      this.addService();
    }

    this.group.controls['id'].valueChanges.subscribe(val => {
      (<FormArray>this.group.controls['services']).controls
        .forEach(entry => entry.patchValue({id: val}));
    });


    this.group.controls['location'].valueChanges.subscribe(val => {
      (<FormArray>this.group.controls['services']).controls
        .forEach(entry => entry.patchValue({location: val}));
    });

    this.group.controls['status'].valueChanges.subscribe(val => {
      (<FormArray>this.group.controls['services']).controls
        .forEach(entry => entry.patchValue({status: val}));
    });

    this.group.controls['numberOfPeople'].valueChanges.subscribe(val => {
      (<FormArray>this.group.controls['services']).controls
        .forEach(entry => entry.patchValue({numberOfPeople: val}));
    });

    this.group.controls['submitted'].valueChanges.subscribe(val => {
      (<FormArray>this.group.controls['services']).controls
        .forEach(entry => entry.patchValue({submitted: val}));
    });

    this.group.controls['oneWay'].valueChanges.subscribe(val => {
      (<FormArray>this.group.controls['services']).controls
        .forEach(entry => entry.patchValue({oneWay: val}));
    });
  }

  initService() {
    return this.formBuilder.group({
      name: ['', [CustomValidators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(1), Validators.max(10000000)]],

      id: [0],
      type: ['Service'],
      approverId: [null],
      providerId: [0],
      location: [],
      status: [],
      numberOfPeople: [this.group.controls.numberOfPeople, [Validators.required, Validators.min(1), Validators.max(10)]],
      oneWay: [this.group.controls.oneWay.value],
      description: ['', [Validators.minLength(10), Validators.maxLength(2048)]],

      submitted: [this.submitted],
      existingService: [null]
    });
  }

  addService() {
    const service = this.initService();

    (<FormArray>this.group.controls['services']).push(service);
  }

  addExistingService() {
    const service = this.initFromExistingService(this.availableServices[0]);

    (<FormArray>this.group.controls['services']).push(service);
  }

  removeService(i: number) {
    (<FormArray>this.group.controls.services).removeAt(i);
  }

  initFromExistingService(inputService: Service) {
    return this.formBuilder.group({
      name: [inputService.name, [CustomValidators.required, Validators.minLength(3)]],
      price: [inputService.price, [Validators.required, Validators.min(1), Validators.max(10000000)]],

      id: [0],
      type: [inputService.type],
      approverId: [null],
      providerId: [0],
      location: [],
      status: [],
      numberOfPeople: [this.group.controls.numberOfPeople, [Validators.required, Validators.min(1), Validators.max(10)]],
      oneWay: [inputService.oneWay],
      description: ['', [Validators.minLength(10), Validators.maxLength(2048)]],

      submitted: [this.submitted],
      existingService: [inputService]
    });
  }
}
