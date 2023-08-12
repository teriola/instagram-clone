import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/Post';

@Component({
    selector: 'app-post-feed',
    templateUrl: './post-feed.component.html',
    styleUrls: ['./post-feed.component.scss'],
})
export class PostFeedComponent implements OnInit {
    constructor(private apiService: ApiService) {}

    posts: Post[] = [];

    ngOnInit() {
        this.apiService.getPosts().subscribe((posts) => {
            this.posts = posts;
        });
    }
    handlePostDeleted(deletedPostId: string) {
        const index = this.posts.findIndex(
            (post) => post._id === deletedPostId
        );

        if (index !== -1) {
            this.posts.splice(index, 1);
        }
    }
}
