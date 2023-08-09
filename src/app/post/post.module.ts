import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { PostItemComponent } from './post-item/post-item.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
    declarations: [PostFeedComponent, PostItemComponent, TimeAgoPipe],
    imports: [CommonModule, CoreModule, RouterModule],
    exports: [PostFeedComponent, PostItemComponent],
})
export class PostModule {}
