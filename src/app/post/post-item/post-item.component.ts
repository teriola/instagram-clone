import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/types/Post';
import { Comment } from 'src/app/types/Comment';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
    @Input() post!: Post;
    comments: Comment[] = [];
    commentValue: string = '';
    isComments: boolean = false;

    constructor(
        public authService: AuthService,
        private postService: PostService
    ) {}

    ngOnInit(): void {
        this.postService
            .getCommentsForPost(this.post._id)
            .subscribe((comments) => {
                this.comments = comments;
            });
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

    bookmarkPost(): void {
        this.postService.bookmarkPost(this.post._id).subscribe((newPost) => {
            this.post.bookmarks = newPost.bookmarks;
        });
    }

    unbookmarkPost(): void {
        this.postService.unbookmarkPost(this.post._id).subscribe((newPost) => {
            this.post.bookmarks = newPost.bookmarks;
        });
    }

    showComments(): void {
        this.isComments = true;
    }

    hideComments(): void {
        this.isComments = false;
    }
}
