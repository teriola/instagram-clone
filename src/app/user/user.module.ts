import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
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
