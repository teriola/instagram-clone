import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        BookmarksComponent,
        EditProfileComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,

        SharedModule,
        PostModule,
    ],
    exports: [LoginComponent, RegisterComponent, ProfileComponent],
})
export class UserModule {}
