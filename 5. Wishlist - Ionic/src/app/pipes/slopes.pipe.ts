import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/';

@Pipe({
    name: 'slopes',
    pure: false
})

export class SlopesPipe implements PipeTransform {
    transform(lists: List[], status: boolean = false): List[] {
        let newList: List[] = [];

        for(let list of lists){
            if(list.finish == status){
                newList.push(list);
            }
        }

        return newList;
    }
}