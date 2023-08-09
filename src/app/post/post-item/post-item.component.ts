import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/types/Post';

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
}
