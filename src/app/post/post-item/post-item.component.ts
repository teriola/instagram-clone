import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/types/Post';
import { Comment } from 'src/app/types/Comment';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
    @Input() post!: Post;
    comments: Comment[] = [];
    commentValue: string = '';
    isComments: boolean = false;

    constructor(
        public authService: AuthService,
        private postService: PostService
    ) {}

    getComments(): Observable<Comment[]> {
        return this.postService.getCommentsForPost(this.post._id);
    }

    postComment(): void {
        this.postService
            .commentPost(this.post._id, this.commentValue)
            .subscribe((comment) => {
                this.commentValue = '';

                if (this.isComments) {
                    this.comments.unshift(comment);
                } else {
                    if (this.authService.loggedUser) {
                        this.comments = [
                            {
                                ...comment,
                                owner: this.authService.loggedUser,
                            },
                        ];
                    }
                }
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

        this.postService.likePost(this.post._id).subscribe((updatedPost) => {
            this.post.likes = updatedPost.likes;
        });
    }

    unlikePost(): void {
        if (!this.authService.isAuthenticated()) return;

        this.postService.unlikePost(this.post._id).subscribe((updatedPost) => {
            this.post.likes = updatedPost.likes;
        });
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
        this.getComments().subscribe((comments) => {
            this.comments = comments;
        });
        this.isComments = true;
    }

    hideComments(): void {
        this.isComments = false;
    }
}
