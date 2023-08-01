import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/Post';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>('https://planet-link-api.onrender.com/posts');
    }

    // getThemes(){
    //     return this.http.get('');
    // }
}
