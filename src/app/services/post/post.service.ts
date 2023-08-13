import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, finalize } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Post } from 'src/app/types/Post';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PostService implements OnDestroy {
    private _posts$ = new BehaviorSubject<Post[]>([]);
    private posts$ = this._posts$.asObservable();
    isLoading: boolean = false;
    subscription!: Subscription;

    constructor(private http: HttpClient, private authService: AuthService) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getAllPosts(): Observable<Post[]> {
        return this.posts$;
    }

    postsInit(): void {
        this.isLoading = true;
        this._posts$.next([]);

        this.subscription = this.http
            .get<Post[]>(`${environment.API_URL}/posts`)
            .subscribe((posts) => {
                this.isLoading = false;
                this._posts$.next(posts);
            });
    }

    getPostsByUser(id: string): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.API_URL}/posts/user/${id}`);
    }

    getSinglePost(id: string): Observable<Post> {
        return this.http.get<Post>(`${environment.API_URL}/posts/${id}`);
    }

    createPost(post: { message: string; image: string }): Observable<Post> {
        this.isLoading = true;
        const postPayload = {
            ...post,
            owner: this.authService.loggedUser?._id,
        };

        return this.http
            .post<Post>(`${environment.API_URL}/posts`, postPayload)
            .pipe(finalize(() => (this.isLoading = false)));
    }

    addPost(newPost: Post) {
        const currentPosts = this._posts$.getValue();
        const updatedPosts = [newPost, ...currentPosts];
        this._posts$.next(updatedPosts);
    }

    likePost(id: string): Observable<Post> {
        return this.http.post<Post>(
            `${environment.API_URL}/posts/${id}/like`,
            {}
        );
    }

    unlikePost(id: string): Observable<Post> {
        return this.http.delete<Post>(
            `${environment.API_URL}/posts/${id}/unlike`,
            {}
        );
    }

    bookmarkPost(id: string): Observable<Post> {
        return this.http.post<Post>(
            `${environment.API_URL}/posts/${id}/bookmark`,
            {}
        );
    }

    unbookmarkPost(id: string): Observable<Post> {
        return this.http.delete<Post>(
            `${environment.API_URL}/posts/${id}/bookmark`
        );
    }

    // updatePost(id: string, recipe: IRecipe): Observable<IRecipe> {
    //     return this.http.patch<IRecipe>(
    //         `${environment.API_URL}recipes/${id}`,
    //         recipe
    //     );
    // }

    deletePost(id: string): Observable<Post> {
        return this.http.delete<Post>(`${environment.API_URL}/posts/${id}`);
    }
}
