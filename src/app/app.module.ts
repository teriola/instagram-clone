import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        FeedComponent,
        PostItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
