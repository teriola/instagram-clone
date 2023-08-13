import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(public authService: AuthService, private router: Router) {}

    onSubmit(form: NgForm): void {
        if (form.invalid) return;

        const {
            name,
            surname,
            email,
            passwordGroup: { password, rePassword },
        } = form.value as {
            name: string;
            surname: string;
            email: string;
            passwordGroup: {
                password: string;
                rePassword: string;
            };
        };

        this.authService
            .register(name, surname, email, password, rePassword)
            .subscribe(() => this.router.navigate(['/']));

        form.resetForm();
    }
}
