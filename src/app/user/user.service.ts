import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    USER_KEY = '[user]';
    user: {
        // _id: string,
        // name: string,
        // surname: string,
        // profilePicture: string,
        email: string,
        accessToken: string,
    } | undefined;

    get isAuth(): boolean {
        return !!this.user;
    }

    constructor(private api: ApiService) {
        try {
            const userJSON = localStorage.getItem(this.USER_KEY) || '';
            this.user = JSON.parse(userJSON);
        } catch (err) {
            this.user = undefined;
        }
    }

    login(email: string, password: string): void {
        this.user = {
            email,
            accessToken: '1234'
        }

        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    }

    register(): void {

    }

    logout(): void {
        this.user = undefined;
        localStorage.removeItem(this.USER_KEY);
    }
}