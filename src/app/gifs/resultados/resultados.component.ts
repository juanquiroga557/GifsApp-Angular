import { Component } from '@angular/core';
import { GifsServices } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  constructor( private gifsServices : GifsServices ) {}

  get resultados() {
    return this.gifsServices.resultados;
  }

}
