import { Pipe, PipeTransform } from '@angular/core';

/**
 * Usage:
 * <p>There are {{ quantity | plural: "item" }} here.</p>
 */

@Pipe({ name: 'plural' })

export class PluralPipe implements PipeTransform {
    transform(count: number, args?: any): any {
        console.log('plural', count, args);
        if (!count) { 
            return `No ${args}s`;
        } else if (count === 1) {
            return `${count} ${args}`;
        } else {
            return `${count} ${args}s`;
        }
    }
}