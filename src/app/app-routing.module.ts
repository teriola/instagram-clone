import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFeedComponent } from './post/post-feed/post-feed.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: PostFeedComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'profile/:userId',
        component: ProfileComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
