import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertDefaultComponent } from './alert-default/alert-default';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';


@NgModule({
	declarations: [
    AlertDefaultComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(AlertDefaultComponent)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
	exports: [
    AlertDefaultComponent
  ]
})
export class ComponentsModule {}
