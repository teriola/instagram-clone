import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
    userId: string = '';
    profilePicture: string =
        'https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png';

    onSubmit(form: NgForm) {
        if (form.invalid) return;

        const value: {
            message: string;
            image: string;
        } = form.value;

        console.log(value);
    }
}
