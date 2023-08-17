import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { tokenInterceptorProvider } from './shared/interceptors/token.interceptor';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,

        AppRoutingModule,
        CoreModule,
        PostModule,
        UserModule,
        SharedModule,
    ],
    providers: [tokenInterceptorProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
