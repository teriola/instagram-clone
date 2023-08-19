import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    editProfileForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.editProfileForm = this.fb.group({
            profilePicture: [
                '',
                [Validators.required, Validators.pattern('https?://.*')],
            ],
            name: ['', [Validators.required, Validators.minLength(3)]],
            surname: ['', [Validators.required, Validators.minLength(3)]],
            description: [''],
        });
    }

    ngOnInit(): void {
        this.user$ = this.route.paramMap.pipe(
            switchMap((params) =>
                this.userService.getSingleUser(params.get('userId'))
            )
        );

        this.user$.subscribe((user) => {
            if (user) {
                this.editProfileForm.patchValue({
                    profilePicture: user.profilePicture || '',
                    name: user.name || '',
                    surname: user.surname || '',
                    description: user.description || '',
                });
            }
        });
    }

    onSubmit(): void {
        if (this.editProfileForm.invalid) return;

        const userData = this.editProfileForm.value as {
            profilePicture: string;
            name: string;
            surname: string;
            description: string;
        };

        this.user$.subscribe((user) => {
            if (user && user._id) {
                this.userService.updateUser(user._id, userData).subscribe();
            }
        });

        this.editProfileForm.reset();
        this.router.navigate(['/']);
    }
}
