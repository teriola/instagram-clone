import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
    transform(value: string): string {
        const date = new Date(value);
        const now = new Date();
        const diff = Math.abs(now.getTime() - date.getTime());

        const minutes = Math.floor(diff / (1000 * 60));
        if (minutes < 1) {
            return 'Less than a minute ago';
        } else if (minutes < 60) {
            return `${minutes}m ago`;
        }

        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
            return `${hours}h ago`;
        }

        const days = Math.floor(hours / 24);
        if (days < 7) {
            return `${days}d ago`;
        }

        const weeks = Math.floor(days / 7);
        if (weeks < 4) {
            return `${weeks}w ago`;
        }

        const months = Math.floor(weeks / 4);
        if (months < 12) {
            return `${months}mo ago`;
        }

        const years = Math.floor(months / 12);
        return `${years}y ago`;
    }
}
