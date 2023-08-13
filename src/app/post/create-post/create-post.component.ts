import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
    constructor(
        public authService: AuthService,
        public postService: PostService
    ) {}

    onSubmit(form: NgForm) {
        if (form.invalid) return;

        const { message, image } = form.value as {
            message: string;
            image: string;
        };

        this.postService.createPost({ message, image }).subscribe((newPost) => {
            this.postService.addPost(newPost);
        });

        form.resetForm();
    }
}
