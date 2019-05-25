import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Service} from "@models/service";

@Component({
  selector: 'app-suggestion-service',
  templateUrl: './suggestion-service.component.html',
  styleUrls: ['./suggestion-service.component.scss']
})
export class SuggestionServiceComponent implements OnInit {

  @Input() group: FormGroup;

  @Input() availableServices: Service[];

  get submitted() {
    return this.group.controls['submitted'].value;
  }

  constructor() {
  }

  ngOnInit() {
    if (this.group.controls.existingService != null) {
      this.group.controls.existingService.valueChanges.subscribe((data) => {
        this.group.controls.name.patchValue(data.name);
      });

      this.group.controls.existingService.valueChanges.subscribe((data) => {
        this.group.controls.price.patchValue(data.price);
      });
    }
  }

}
