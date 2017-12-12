import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriePage } from './categorie';
import { SQLite } from '@ionic-native/sqlite';
import { CategorieProvider } from '../../providers/categorie/categorie';
import { ClassUtil } from '../../Util/ClassUtil';

@NgModule({
  declarations: [
    CategoriePage
  ],
  imports: [
    IonicPageModule.forChild(CategoriePage),
  ],
  providers: [
    SQLite,
    CategorieProvider,
    ClassUtil
  ]
})
export class CategoriePageModule {}
