import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styles: []
})
export class NgclassComponent implements OnInit {

  alert:string = 'alert-danger';

  features:Object = {
    danger:true
  }

  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  execute(){
    this.isLoading = true;
    setTimeout(()=> this.isLoading = false, 3000);
  }

}
