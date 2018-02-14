import {Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  activo: boolean = true;

  ngOnInit() {
    this.loader();
    $('.ui.dropdown')
      .dropdown()
    ;
  }

  loader() {
    setTimeout(() => {
      this.activo = false;
    }, 3000);
  }

}
