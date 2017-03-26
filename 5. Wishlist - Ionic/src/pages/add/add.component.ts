import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../app/models/';
import { AlertController, NavController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html'
})
export class AddComponent implements OnInit {

    listName: string = '';
    itemName: string = '';

    items: ListItem[] = [];

    constructor(public alertController: AlertController,
        private navController: NavController,
        private wishListService: WishListService) { }

    ngOnInit() { }

    add() {
        if (this.itemName.length === 0) {
            return;
        }
        let item = new ListItem();
        item.name = this.itemName;
        this.items.push(item);
        this.itemName = '';
    }

    delete(idx: number) {
        this.items.splice(idx, 1);
    }

    saveList() {
        if (this.listName.length === 0) {
            let alert = this.alertController.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario.',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        let list = new List(this.listName);
        list.items = this.items;

        this.wishListService.addList(list);
        //this.wishListService.lists.push(list);

        this.navController.pop();
    }


}