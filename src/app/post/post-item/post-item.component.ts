import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/types/Post';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
    constructor(
        public authService: AuthService,
        private postService: PostService
    ) {}

    @Input() post!: Post;

    commentValue: string = '';

    isBookmarked: boolean = false;

    isDropdown: boolean = false;
    toggleDropdown() {
        this.isDropdown = !this.isDropdown;
        console.log(this.authService.loggedUser);
        
        
    }

    deletePost() {
        if (confirm('Are you sure you want to delete this post?')) {
            this.postService.deletePost(this.post._id).subscribe(
                () => {
                    this.postService.postsInit();
                },
                (error) => {
                    console.error('Error deleting post:', error);
                }
            );
        }
    }

    likePost(): void {
        if (!this.authService.isAuthenticated()) return;

        this.postService.likePost(this.post._id).subscribe(
            (updatedPost) => {
                this.post.likes = updatedPost.likes;
            },
            (error) => {
                console.error('Error liking post:', error);
            }
        );
    }

    unlikePost(): void {
        if (!this.authService.isAuthenticated()) return;

        this.postService.unlikePost(this.post._id).subscribe(
            (updatedPost) => {
                this.post.likes = updatedPost.likes;
            },
            (error) => {
                console.error('Error unliking post:', error);
            }
        );
    }
    showComments(): void {}

    // @Output() postDeleted = new EventEmitter<string>();

    // deletePost() {
    //     this.api.deletePost(this.post._id).subscribe((res) => {
    //         this.postDeleted.emit(this.post._id);
    //         this.toggleDropdown();
    //     });
    // }

    // bookmarkPost() {
    //     this.api.bookmarkPost(this.post._id).subscribe((res) => {
    //         this.isBookmarked = true;
    //         this.toggleDropdown();
    //     });
    // }

    // unbookmarkPost() {
    //     this.api.unbookmarkPost(this.post._id).subscribe(res => {
    //         this.isBookmarked = false;
    //         this.toggleDropdown();
    //     })
    // }

    // likePost(): void {
    //     this.api.likePost(this.post._id).subscribe((post) => {
    //         this.post.likes = post.likes;
    //     });
    // }

    // unlikePost(): void {
    //     this.api.unlikePost(this.post._id).subscribe((post) => {
    //         this.post.likes = post.likes;
    //     });
    // }
}
