import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { PostItemComponent } from './post-item/post-item.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from './time-ago.pipe';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PostFeedComponent,
        PostItemComponent,
        TimeAgoPipe,
        CreatePostComponent,
    ],
    imports: [CommonModule, CoreModule, RouterModule, FormsModule, SharedModule],
    exports: [PostFeedComponent, PostItemComponent],
})
export class PostModule {}
