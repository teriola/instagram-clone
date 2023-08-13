import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/types/Post';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent {
    constructor(public postService: PostService) {}

    bookmarks: Post[] = [];

    ngOnInit(): void {
        this.postService.getBookmarksByUser().subscribe((bookmarks) => {
            this.bookmarks = bookmarks;
        });
    }
}
