import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler } from 'ionic-angular';

import { CategorieProvider } from "./categorie/categorie";
import { DatabaseProvider } from "./database/database";
import { ExpenseProvider } from "./expense/expense";
import { IncomeProvider } from "./income/income";
import { InvoiceProvider } from "./invoice/invoice";




@NgModule({
    declarations:[],
    imports:[],
    bootstrap:[IonicApp],
    entryComponents:[],
    providers:[
        CategorieProvider,
        DatabaseProvider,
        ExpenseProvider,
        IncomeProvider,
        InvoiceProvider,
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class ProvidersModule{}