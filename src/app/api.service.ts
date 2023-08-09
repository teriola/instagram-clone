import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/Post';
import { Observable } from 'rxjs';
import { User } from './types/User';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    appUrl = 'https://planet-link-api.onrender.com';

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.appUrl}/posts`);
    }

    getUserPosts(userId: string) {
        return this.http.get<Post>(`${this.appUrl}/posts/user/${userId}`);
    }

    loginUser(email: string, password: string) {
        return this.http.post(`${this.appUrl}/auth/login`, { email, password });
    }

    registerUser(
        email: string,
        name: string,
        surname: string,
        password: string,
        rePassword: string
    ) {
        return this.http.post<User>(`${this.appUrl}/auth/register`, {
            email,
            name,
            surname,
            password,
            rePassword,
        });
    }

    getUserById(_id: any) {
        return this.http.get<User>(`${this.appUrl}/users/${_id}`);
    }

    likePost(_id: string) {
        const userJson = localStorage.getItem('[user]');
        let headers = new HttpHeaders();

        if (userJson) {
            const accessToken = JSON.parse(userJson).accessToken;
            headers = headers.set('x-authorization', accessToken);
        }

        return this.http.post<Post>(`${this.appUrl}/posts/${_id}/like`, null, {
            headers: headers,
        });
    }

    unlikePost(_id: string) {
        const userJson = localStorage.getItem('[user]');
        let headers = new HttpHeaders();

        if (userJson) {
            const accessToken = JSON.parse(userJson).accessToken;
            headers = headers.set('x-authorization', accessToken);
        }

        return this.http.delete<Post>(`${this.appUrl}/posts/${_id}/unlike`, {
            headers: headers,
        });
    }
}
