import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    USER_KEY = '[user]';
    user:
        | {
              _id: string;
              // name: string,
              // surname: string,
              // profilePicture: string,
              email: string;
              accessToken: string;
          }
        | undefined;

    get isAuth(): boolean {
        return !!this.user;
    }

    get userId(): string {
        return this.user?._id || '';
    }

    constructor(private api: ApiService) {
        try {
            const userJSON = localStorage.getItem(this.USER_KEY) || '';
            this.user = JSON.parse(userJSON);
        } catch (err) {
            this.user = undefined;
        }
    }

    register(
        email: string,
        name: string,
        surname: string,
        password: string,
        rePassword: string
    ): void {
        console.log(email);
        
        // const user = this.http.post<User>(
        //     'https://planet-link-api.onrender.com/auth/register',
        //     {
        //         email,
        //         name,
        //         surname,
        //         password,
        //         rePassword,
        //     }
        // );
    }

    logout(): void {
        this.user = undefined;
        localStorage.removeItem(this.USER_KEY);
    }

    login(email: string, password: string): void {
        this.user = {
            email,
            accessToken:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQzYjcwZGNkZmFhMWNjNzNiZTYxNDQiLCJlbWFpbCI6Im1hcmtAZ21haWwuY29tIiwiaWF0IjoxNjkxNTk2NTU4fQ.Tm-C1DENaKBQrIr2FLAlbTOw3II3hgw3VIuYiwPzaWk',
            _id: '64d3b70dcdfaa1cc73be6144',
        };

        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    }

    // login(email: string, password: string) {
    //     return this.http
    //         .post<User>(`https://planet-link-api.onrender.com/auth/login`, {
    //             email,
    //             password,
    //         })
    //         .pipe(tap((user) => this.user$$.next(user)));
    // }

    //   logout() {
    //     return this.http
    //       .post<User>('/api/logout', {})
    //       .pipe(tap(() => this.user$$.next(undefined)));
    //   }

    //   getProfile() {
    //     return this.http
    //       .get<User>('/api/users/profile')
    //       .pipe(tap((user) => this.user$$.next(user)));
    //   }

    //   updateProfile(username: string, email: string, tel?: string) {
    //     return this.http
    //       .put<User>('/api/users/profile', { username, email, tel })
    //       .pipe(tap((user) => this.user$$.next(user)));
    //   }
}
