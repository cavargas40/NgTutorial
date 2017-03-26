import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { List, ListItem } from '../../app/models/';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {

    idx: number;
    list: List;

    constructor(public navParams: NavParams,
        public navController: NavController,
        private wishListService: WishListService,
        public alertController: AlertController) {
        this.idx = this.navParams.get('idx');
        this.list = this.navParams.get('list');
    }

    ngOnInit() { }

    updateItem(item: any) {
        item.complete = !item.complete;
        
        let allMarked = true;
        for(let item of this.list.items){
            if(!item.complete){
                allMarked = false;
                break;
            }
        }
        this.list.finish = allMarked;
        this.wishListService.updateData();
    }

    deleteList() {
        let confirm = this.alertController.create({
            title: this.list.name,
            message: 'Está seguro desea eliminar la lista?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: () => {
                        this.wishListService.deleteList(this.idx);
                        this.navController.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}