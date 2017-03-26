import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WishListService } from './services/wish-list.service';

import { TabsPage } from '../pages/tabs/tabs';

import { SlopesComponent } from '../pages/slopes/slopes.component';
import { CompleteComponent } from '../pages/complete/complete.component';
import { AddComponent } from '../pages/add/add.component';
import { DetailComponent } from '../pages/detail/detail.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { SlopesPipe } from './pipes/slopes.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SlopesComponent,
    CompleteComponent,
    AddComponent,
    PlaceholderPipe,
    DetailComponent,
    SlopesPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SlopesComponent,
    CompleteComponent,
    AddComponent,
    DetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WishListService
  ]
})
export class AppModule {}
