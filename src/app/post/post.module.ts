import { NgModule } from '@angular/core';

import { PostFeedComponent } from './post-feed/post-feed.component';
import { PostItemComponent } from './post-item/post-item.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { CreatePostComponent } from './create-post/create-post.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PostFeedComponent,
        PostItemComponent,
        TimeAgoPipe,
        CreatePostComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,

        CoreModule,
        SharedModule,
    ],
    exports: [PostFeedComponent, PostItemComponent],
})
export class PostModule {}
