import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function badNameValidator(
//   control: AbstractControl
// ): { [key: string]: any } | null {
//   //retun object or null
//   const bad = /admin/.test(control.value);
//   //si contiene la palabra admin, levantamos bandera bad
//   return bad ? { badName: { value: control.value } } : null;
// }

// same
export function badNameValidator(badName: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    //retun object or null
    const bad = badName.test(control.value);
    //si contiene la palabra admin, levantamos bandera bad
    return bad ? { badName: { value: control.value } } : null;
  };
}
