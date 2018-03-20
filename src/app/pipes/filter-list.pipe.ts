import { Pipe, PipeTransform } from '@angular/core';

/**
 * Usage:
 * <p>All selected: {{ itemsArray | filterList: 'selected' }} </p>
 * <p>Not selected: {{ itemsArray | filterList: 'selected':false }} </p>
 * <p>ID 1: {{ itemsArray | filterList: 'id':1 }} </p>
 */
 
@Pipe({ name: 'filterList' })

export class FilterListPipe implements PipeTransform {
    transform(list: any[], key: string, value?: any): any {
        if (typeof value === 'undefined') {
            return list.filter(x => x[key]);
        } else {
            return list.filter(x => x[key] === value);
        }
    }
}
