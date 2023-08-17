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
    @Input('appPasswordsMatch') targetControlName: string = '';

    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        const targetControl = control.parent?.get(this.targetControlName);

        if (targetControl && control.value !== targetControl.value) {
            return { passwordsDoNotMatch: true };
        }
        return null;
    }
}
