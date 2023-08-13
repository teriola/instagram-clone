import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(public authService: AuthService, private router: Router) {}

    onSubmit(form: NgForm): void {
        if (form.invalid) return;

        const { email, password } = form.value as {
            email: string;
            password: string;
        };

        this.authService.login(email, password).subscribe(() => {
            this.router.navigate(['/']);
        });

        form.resetForm();
    }
}
