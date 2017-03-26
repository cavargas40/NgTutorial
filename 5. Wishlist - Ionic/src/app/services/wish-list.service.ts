import { Injectable } from '@angular/core';
import { List } from '../models/list';

@Injectable()
export class WishListService {

    lists: List[] = [];

    constructor() {
        this.loadData();
    }

    updateData() {
        localStorage.setItem('data', JSON.stringify(this.lists));
    }

    loadData(){
        if(localStorage.getItem('data')){
            this.lists = JSON.parse(localStorage.getItem('data'));
        }        
    }

    addList( list:List ){
        this.lists.push(list);
        this.updateData();
    }

    deleteList( idx: number ){
        this.lists.splice(idx,1);
        this.updateData();
    }

}