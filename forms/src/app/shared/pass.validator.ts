import { AbstractControl } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

export function passValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const pass = control.get('pass');
  const confirmPass = control.get('confirmPass');
  if (pass.pristine || confirmPass.pristine) {
    return null;
  }
  return pass && confirmPass && pass.value !== confirmPass.value
    ? { mismatch: true }
    : null;
}
