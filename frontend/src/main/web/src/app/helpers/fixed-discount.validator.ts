import {FormGroup} from '@angular/forms';

export function FixedDiscount() {
  return (formGroup: FormGroup) => {
    const valueControl = (<FormGroup>formGroup.controls.discount).controls.amount;
    const discountTypeControl = (<FormGroup>formGroup.controls.discount).controls.type;
    const priceControl = formGroup.controls.price;

    if (valueControl.errors && !valueControl.errors.invalidDiscount) {
      return;
    }

    if (discountTypeControl.value == 'Fixed discount' && valueControl.value >= priceControl.value) {
      valueControl.setErrors({invalidDiscount: true});
    } else {
      valueControl.setErrors(null);
    }
  }
}
