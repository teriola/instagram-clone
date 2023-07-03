import { Component } from '@angular/core';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
    isText = true;
    text = 'Testing text';
    likes = 696969;
}
