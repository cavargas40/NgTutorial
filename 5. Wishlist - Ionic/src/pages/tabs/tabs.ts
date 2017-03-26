import { Component } from '@angular/core';

import { SlopesComponent } from '../slopes/slopes.component';
import { CompleteComponent } from '../complete/complete.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SlopesComponent;
  tab2Root: any = CompleteComponent;  

  constructor() {

  }
}
