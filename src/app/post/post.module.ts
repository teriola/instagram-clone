import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
    declarations: [
        PostFeedComponent,
        PostItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PostFeedComponent,
    ],
})
export class PostModule { }
