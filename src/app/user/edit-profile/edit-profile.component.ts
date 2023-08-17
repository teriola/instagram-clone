import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/types/User';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
    user$!: Observable<User | null>;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.user$ = this.route.paramMap.pipe(
            switchMap((params) =>
                this.userService.getSingleUser(params.get('userId'))
            )
        );
    }
}
