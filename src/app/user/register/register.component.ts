import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(private userService: UserService, private router: Router) {}

    onSubmit(form: NgForm): void {
        if (form.invalid) return;

        const value: {
            email: string;
            name: string;
            surname: string;
            passwordGroup: {
                password: string;
                rePassword: string;
            };
        } = form.value;
        this.register(
            value.email,
            value.name,
            value.surname,
            value.passwordGroup.password,
            value.passwordGroup.rePassword
        );
    }

    register(
        email: string,
        name: string,
        surname: string,
        password: string,
        rePassword: string
    ) {
        console.log({ email, name, surname, password, rePassword });

        this.userService.register(email, name, surname, password, rePassword);
        this.router.navigate(['/']);
    }
}
