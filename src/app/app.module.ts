import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        FeedComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
