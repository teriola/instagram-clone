import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
    @Input() message: string = '';
    @Input() likes: number = 0;
    @Input() image: string = '';
    @Input() ownerImage: string = '';
    @Input() ownerName: string = '';
    @Input() ownerSurname: string = '';
    @Input() ownerId: string = '';
}
