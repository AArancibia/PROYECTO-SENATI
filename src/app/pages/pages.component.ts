import {Component, OnInit} from "@angular/core";
declare var $:any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit{

  constructor(){}

  ngOnInit() {
    $('.ui.accordion').accordion();
    $('.ui.dropdown')
      .dropdown()
    ;
  }
}
