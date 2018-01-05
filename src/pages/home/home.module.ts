import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage, Popup } from './home';

//Plugin
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HomePage,
    Popup
  ],
  imports: [
    ChartsModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [],
  providers: [
    
  ],
  entryComponents:[
    HomePage,
    Popup
  ]
})
export class HomePageModule {}
