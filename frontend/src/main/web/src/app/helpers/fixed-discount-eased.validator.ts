import {FormGroup} from "@angular/forms";

export function FixedDiscountEased(price: number) {
  return (formGroup: FormGroup) => {
    const valueControl = formGroup.controls['amount'];
    const discountTypeControl = formGroup.controls['type'];

    if (valueControl.errors && !valueControl.errors.invalidDiscount) {
      return;
    }

    if (discountTypeControl.value == 'Fixed discount' && valueControl.value >= price) {
      valueControl.setErrors({invalidDiscount: true});
    } else {
      valueControl.setErrors(null);
    }
  }
}
