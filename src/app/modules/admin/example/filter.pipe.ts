import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchTerm: string): any[] {
        if (!items || !searchTerm) {
            return items;
        }

        searchTerm = searchTerm.toLowerCase();
        return items.filter(
            (item) =>
                item.post.ID.toString().toLowerCase().includes(searchTerm) ||
                item.fields.proprietario.user_firstname
                    .toLowerCase()
                    .includes(searchTerm) ||
                item.fields.status.toLowerCase().includes(searchTerm)
        );
    }
}
