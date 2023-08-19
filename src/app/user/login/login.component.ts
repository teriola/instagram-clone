import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(
        public authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit(): void {
        if (this.loginForm.invalid) return;

        const { email, password } = this.loginForm.value;

        this.authService.login(email, password).subscribe(() => {
            this.router.navigate(['/']);
        });

        this.loginForm.reset();
    }
}
