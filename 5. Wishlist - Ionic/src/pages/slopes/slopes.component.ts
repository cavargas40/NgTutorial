import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';
import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { DetailComponent } from '../detail/detail.component'

@Component({
    selector: 'app-slopes',
    templateUrl: 'slopes.component.html'
})
export class SlopesComponent implements OnInit {
    constructor(private wishlist: WishListService,
        private navController: NavController) { }

    ngOnInit() { }

    goAdd() {
        this.navController.push(AddComponent);
    }

    viewDetail(list, idx) {
        this.navController.push(DetailComponent, { list, idx });
    }
}