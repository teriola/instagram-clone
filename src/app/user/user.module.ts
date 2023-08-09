import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';



@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        GalleryItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
    ]
})
export class UserModule { }
