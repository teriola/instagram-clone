import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/Post';
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
    @Input() post: Post = {
        _id: '',
        owner: {
            _id: '',
            name: '',
            surname: '',
            profilePicture: '',
            posts: [],
            followers: [],
            following: [],
            description: '',
        },
        message: '',
        image: '',
        likes: [],
        comments: [],
        createdAt: '',
        updatedAt: '',
    };

    constructor(private api: ApiService, public userService: UserService) {}

    likePost(): void {
        this.api.likePost(this.post._id).subscribe((post) => {
            this.post.likes = post.likes;
        });
    }

    unlikePost(): void {
        this.api.unlikePost(this.post._id).subscribe((post) => {
            this.post.likes = post.likes;
        });
    }
}
