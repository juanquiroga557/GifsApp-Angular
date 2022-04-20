import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServices {

  private _historial : string[] = [];
  private _resultados : Gif[] = [];
  public api_key : string = "Ks2F6LXcZifNQLuXkvpb3TMU2ifB7ZJP"
 
  constructor( private httpClient: HttpClient ) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this._resultados = JSON.parse(localStorage.getItem('Gifs')!) || [];
    console.log(this._historial);
  }

  get resultados() {
    return [...this._resultados];
  }

  get historial() {
    return [...this._historial];
  }



  buscarGifs( busqueda : string ) {

    busqueda = busqueda.toLocaleLowerCase();
    
    
    if( busqueda.trim().length != 0 ) {
      
      const url : string = 'https://api.giphy.com/v1/gifs';

      if( !this._historial.includes( busqueda) ) {   

        this._historial.unshift( busqueda );
        this._historial = this._historial.splice(0,10);
  
        localStorage.setItem('historial',JSON.stringify(this.historial));
        
        // CON FETCH
  
        // fetch('https://api.giphy.com/v1/gifs/search?api_key=Ks2F6LXcZifNQLuXkvpb3TMU2ifB7ZJP&q=goku&limit=10').then( resp => {
        //   resp.json().then( data => {
        //     console.log(data);
        //   })
        // })
             
      }

      const params =  new HttpParams()
        .set('api_key',this.api_key)
        .set('limit', '10')
        .set('q', busqueda)
      
      
      this.httpClient.get<SearchGifsResponse>(`${ url }/search`,{ params } ).subscribe( ( resp ) => {
        this._resultados = resp.data;
        localStorage.setItem('Gifs',JSON.stringify(this._resultados));
      });
      
    }  
  }
}
