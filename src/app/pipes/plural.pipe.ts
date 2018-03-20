import { Pipe, PipeTransform } from '@angular/core';

/**
 * Usage:
 * <p>There are {{ quantity | plural: "item" }} here.</p>
 */

@Pipe({ name: 'plural' })

export class PluralPipe implements PipeTransform {
    transform(value: any, title: string): any {
        let count;
        
        if (typeof value === 'number') {
            count = value;
        } else if (Array.isArray(value)) {
            count = value.length
        } else {
            count = Number(value) || 0;
        }
        
        if (!count) { 
            return `No ${title}s`;
        } else if (count === 1) {
            return `${count} ${title}`;
        } else {
            return `${count} ${title}s`;
        }
    }
}