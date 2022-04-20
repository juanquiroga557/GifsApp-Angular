import { Component } from '@angular/core';
import { GifsServices } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor( private gifsServices : GifsServices ) { }

  get historial() {
    return this.gifsServices.historial;
  }  

  buscar( termino : string ) {
    console.log(this.gifsServices.buscarGifs( termino ));
  }
}
