import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/types/User';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
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
    constructor(private route: ActivatedRoute, private api: ApiService) {}

    ngOnInit() {
        const userId = this.route.snapshot.paramMap.get('userId');
        this.api.getUserById(userId).subscribe((user) => {
            this.user = user;
            console.log(user);
        });
    }
}
