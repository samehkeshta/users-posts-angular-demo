import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const result = emailRegExp.test(control.value);

    return result ? null : {invalidEmail: {value: control.value}};
  };
}
