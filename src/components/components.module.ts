import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertDefaultComponent } from './alert-default/alert-default';
import { IonicModule } from 'ionic-angular/module';


@NgModule({
	declarations: [
		AlertDefaultComponent
	],
	imports: [
		IonicModule.forRoot(AlertDefaultComponent)
	],
	exports: [
		AlertDefaultComponent
	],
	schemas:[
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class ComponentsModule {}
