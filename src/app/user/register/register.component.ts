import { Component } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    registerForm: FormGroup = this.fb.group(
        {
            name: ['', [Validators.required, Validators.minLength(3)]],
            surname: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rePassword: ['', [Validators.required]],
        },
        { validators: this.passwordMatchValidator }
    );

    constructor(
        public authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    onSubmit(): void {
        if (this.registerForm.invalid) return;

        const { name, surname, email, password, rePassword } = this.registerForm
            .value as {
            name: string;
            surname: string;
            email: string;
            password: string;
            rePassword: string;
        };

        this.authService
            .register(name, surname, email, password, rePassword)
            .subscribe(() => this.router.navigate(['/']));

        this.registerForm.reset();
    }

    passwordMatchValidator(formGroup: FormGroup) {
        const passwordControl = formGroup.get('password');
        const rePasswordControl = formGroup.get('rePassword');

        if (passwordControl?.value === rePasswordControl?.value) {
            rePasswordControl?.setErrors(null);
        } else {
            rePasswordControl?.setErrors({ passwordMismatch: true });
        }
    }
}
