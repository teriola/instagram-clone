import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';

@Directive({
    selector: '[appPasswordsMatch]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordsMatchDirective,
            multi: true,
        },
    ],
})
export class PasswordsMatchDirective implements Validator {
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        const passwordControl = control.get('password');
        const rePasswordControl = control.get('rePassword');

        if (passwordControl && rePasswordControl) {
            if (passwordControl.value !== rePasswordControl.value) {
                rePasswordControl.setErrors({ passwordsDoNotMatch: true });
            } else {
                rePasswordControl.setErrors(null);
            }
        }

        return null;
    }
}
