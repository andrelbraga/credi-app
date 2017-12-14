import { Renderer } from '@angular/core';
import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
/**
 * Generated class for the PromptDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[prompt]', // Attribute selector
  host: {
       '(click)': 'onClick($event.target)'
     }
})
export class PromptDirective implements OnInit{

  constructor(private el: ElementRef, public render: Renderer, private nav: NavParams ) {
    console.log('Hello PromptDirective Directive');
  }

  categories: any;
   
  ngOnInit() {
      
  }

  @HostListener('click', ['$event'])
    confirmFirst(event: Event) {
      console.log(this.nav.get('categories'));
      console.log(this.nav)
       return document.getElementById('alert').innerHTML = "<div class='alert-wrapper'>"
       +"<div class='alert-head'>"
       +"</div>"
       +"</div>";
    
    }


}
