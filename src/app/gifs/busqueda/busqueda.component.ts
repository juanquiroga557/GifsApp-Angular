import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServices } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild("txtBuscar") txtBuscar !: ElementRef<HTMLInputElement>;

  constructor( public gifsServices : GifsServices ) {}

  buscar() { 
    const busqueda : string = this.txtBuscar.nativeElement.value;
    this.gifsServices.buscarGifs( busqueda );
    this.txtBuscar.nativeElement.value = "";
  } 
}
