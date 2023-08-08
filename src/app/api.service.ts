import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/Post';
import { Observable } from 'rxjs';
import { User } from './types/User';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    appUrl = 'https://planet-link-api.onrender.com';

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(`${this.appUrl}/posts`);
    }

    getUserPosts(userId: string) {
        return this.http.get<Post>(`${this.appUrl}/posts/user/${userId}`);
    }

    loginUser(email: string, password: string) {
        return this.http.post(`${this.appUrl}/auth/login`, { email, password });
    }

    registerUser(email: string, name: string, surname: string, password: string, rePassword: string) {
        return this.http.post<User>(`${this.appUrl}/auth/register`, { email, name, surname, password, rePassword });
    }

    // getUserById(_id) {
    //     return
    // }
}
