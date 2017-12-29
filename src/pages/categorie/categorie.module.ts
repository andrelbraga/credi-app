import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriePage } from './categorie';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    CategoriePage
  ],
  imports: [
    IonicPageModule.forChild(CategoriePage),
  ],
  providers: [
    SQLite,
  ]
})
export class CategoriePageModule {}
