import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';
import { NavController } from 'ionic-angular';
import { DetailComponent } from '../detail/detail.component'

@Component({
    selector: 'app-complete',
    templateUrl: 'complete.component.html'
})
export class CompleteComponent implements OnInit {
    constructor(private wishlist: WishListService,
        private navController: NavController) { }

    ngOnInit() { }

    viewDetail(list, idx) {
        this.navController.push(DetailComponent, { list, idx });
    }

}