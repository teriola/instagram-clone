import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent {

    constructor(private userService: UserService, private router: Router) {}

    get isAuth() {
        return this.userService.isAuth;
    }

    logout(): void {
        this.userService.logout();
        this.router.navigate(['/']);
    }
}
