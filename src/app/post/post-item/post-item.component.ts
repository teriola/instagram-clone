import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/Post';
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
    constructor(private api: ApiService, public userService: UserService) {}

    isDropdown: boolean = false;

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
    @Output() postDeleted = new EventEmitter<string>();

    deletePost() {
        this.api.deletePost(this.post._id).subscribe((res) => {
            this.postDeleted.emit(this.post._id);
            this.toggleDropdown();
        });
    }

    isBookmarked: boolean = false;
    bookmarkPost() {
        this.api.bookmarkPost(this.post._id).subscribe((res) => {
            this.isBookmarked = true;
            this.toggleDropdown();
        });
    }

    unbookmarkPost() {
        this.api.unbookmarkPost(this.post._id).subscribe(res => {
            this.isBookmarked = false;
            this.toggleDropdown();
        })
    }

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

    toggleDropdown() {
        this.isDropdown = !this.isDropdown;
    }
}
