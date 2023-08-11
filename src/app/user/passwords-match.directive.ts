import { Directive } from '@angular/core';
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

    ngOnInit() {
        console.log('password test');
    }

    validate(control: AbstractControl): ValidationErrors | null {
        const passwordControl = control.get('password');
        const rePasswordControl = control.get('rePassword');
        console.log(passwordControl);

        if (passwordControl && rePasswordControl) {
            if (passwordControl.value !== rePasswordControl.value) {
                rePasswordControl.setErrors({ passwordsDoNotMatch: true });
                console.log('invalid');
            } else {
                rePasswordControl.setErrors(null);
                console.log('valid');
            }
        }

        return null;
    }
}
