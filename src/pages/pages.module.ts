import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler } from 'ionic-angular';

//Not use
//import { PagesComponent } from '../pages/pages.component';

//Modules Pages
import { IncomePageModule } from './income/income.module';
import { ExpensePageModule } from './expense/expense.module';
import { CategoriePageModule } from './categorie/categorie.module';
import { RootPageModule } from './root/root.module';
import { HomePageModule } from './home/home.module';

import { ChartsModule } from 'ng2-charts';

//Modules Providers
import { ProvidersModule } from '../providers/providers.module';


@NgModule({
  declarations: [ ],
  imports: [
    ChartsModule,
    IncomePageModule,
    ExpensePageModule,
    CategoriePageModule,
    ProvidersModule,
    RootPageModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class PagesModule {}
