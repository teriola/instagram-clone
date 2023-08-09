import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    isLoading: boolean = true;
    user = {
        // "_id": "646ef82203a8b9b4404d787a",
        profilePicture: '',
        name: '',
        surname: '',
        posts: [''],
        followers: [''],
        following: [''],
        description: '',
    };

    posts: any = [];

    constructor(private route: ActivatedRoute, private api: ApiService) {}

    ngOnInit() {
        const userId = this.route.snapshot.paramMap.get('userId');

        this.api.getUserById(userId).subscribe((user) => {
            this.user = user;

            this.api.getUserPosts(user._id).subscribe((posts) => {
                this.posts = posts;
                this.isLoading = false;
            });
        });
    }
}
