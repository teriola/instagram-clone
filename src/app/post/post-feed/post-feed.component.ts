import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/types/Post';

@Component({
    selector: 'app-post-feed',
    templateUrl: './post-feed.component.html',
    styleUrls: ['./post-feed.component.scss'],
})
export class PostFeedComponent implements OnInit {
    posts!: Observable<Post[]>;

    constructor(
        public postService: PostService,
        public authService: AuthService
    ) {}

    ngOnInit(): void {
        this.postService.postsInit();
        this.posts = this.postService.getAllPosts();
    }
}
