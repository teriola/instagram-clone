import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, finalize, switchMap } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';
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
    user$!: Observable<User | null>;
    posts$!: Observable<Post[]>;
    isLoading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        public authService: AuthService,
        private postService: PostService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.user$ = this.route.paramMap.pipe(
            switchMap((params) =>
                this.userService.getSingleUser(params.get('userId'))
            )
        );

        this.posts$ = this.user$.pipe(
            switchMap((user) =>
                this.postService.getPostsByUser(user?._id).pipe(
                    finalize(() => {
                        this.isLoading = false;
                    })
                )
            )
        );
    }
}
