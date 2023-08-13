import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import { User } from 'src/app/types/User';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _loggedUser$ = new BehaviorSubject<User | null>(null);
    loggedUser$ = this._loggedUser$.asObservable();

    isLoading: boolean = false;

    constructor(private userService: UserService, private router: Router) {
        const loggedUser = JSON.parse(localStorage.getItem('[user]') as string);
        this._loggedUser$.next(loggedUser as User);
    }

    login(email: string, password: string) {
        this.isLoading = true;
        return this.userService.loginUser(email, password).pipe(
            finalize(() => (this.isLoading = false)),
            tap((response) => {
                this.setLocalUser(response);
            })
        );
    }

    register(
        name: string,
        surname: string,
        email: string,
        password: string,
        rePassword: string
    ) {
        this.isLoading = true;
        return this.userService
            .registerUser(name, surname, email, password, rePassword)
            .pipe(
                finalize(() => (this.isLoading = false)),
                tap((response) => {
                    this.setLocalUser(response);
                })
            );
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('[user]');
    }

    logout(): void {
        this._loggedUser$.next(null);
        this.userService.logout();
        this.router.navigate(['/']);
    }

    setLocalUser(user: User): void {
        this._loggedUser$.next(user);
        localStorage.setItem('[user]', JSON.stringify(user));
    }

    get loggedUser(): User | null {
        return this._loggedUser$.getValue();
    }
}
