import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'instagram-clone';

    constructor(private router: Router) {}

    showSidebar(): boolean {
        if (
            this.router.url.includes('login') ||
            this.router.url.includes('register')
        ) {
            return false;
        }
        return true;
    }
}
