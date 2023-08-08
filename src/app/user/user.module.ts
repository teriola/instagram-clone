import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
    ]
})
export class UserModule { }
