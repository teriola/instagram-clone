import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/User';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    loginUser(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${environment.API_URL}/auth/login`, {
            email,
            password,
        });
    }

    registerUser(
        name: string,
        surname: string,
        email: string,
        password: string,
        rePassword: string
    ): Observable<User> {
        return this.http.post<User>(`${environment.API_URL}/auth/register`, {
            name,
            surname,
            email,
            password,
            rePassword,
        });
    }

    logout() {
        localStorage.removeItem('[user]');
    }

    getSingleUser(id: string): Observable<User> {
        return this.http.get<User>(`${environment.API_URL}/users/${id}`);
    }

    // updateUser(id: string, user: User): Observable<User> {
    //     return this.http.patch<User>(
    //         `${environment.API_URL}users/${id}`,
    //         user
    //     );
    // }
}
