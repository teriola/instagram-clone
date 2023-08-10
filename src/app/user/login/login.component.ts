import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private userService: UserService, private router: Router) {}

    onSubmit(form: NgForm): void {
        if (form.invalid) return;

        const value: { email: string; password: string } = form.value;
        console.log(value);
    }

    login(email: string, password: string): void {
        this.userService.login(email, password);
        this.router.navigate(['/']);
    }
}
