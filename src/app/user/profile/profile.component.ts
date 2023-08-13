import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, finalize, startWith, switchMap } from 'rxjs';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';
import { Post } from 'src/app/types/Post';
import { User } from 'src/app/types/User';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private postService: PostService
    ) {}

    user$!: Observable<User | null>;
    posts$!: Observable<Post[]>;

    isLoading: boolean = true;

    ngOnInit(): void {
        this.user$ = this.route.paramMap.pipe(
            switchMap((params) => {
                const userId = params.get('userId');
                if (userId) {
                    return this.userService.getSingleUser(userId).pipe(
                        finalize(() => {
                            this.isLoading = false;
                        })
                    );
                } else {
                    return new Observable<User | null>((subscriber) => {
                        subscriber.next(null);
                        subscriber.complete();
                    });
                }
            })
        );

        this.posts$ = this.user$.pipe(
            switchMap((user) => {
                if (user) {
                    return this.postService.getPostsByUser(user._id);
                } else {
                    return new Observable<Post[]>((subscriber) => {
                        subscriber.next([]);
                        subscriber.complete();
                    });
                }
            })
        );
    }
}
