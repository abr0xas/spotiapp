import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  private busquedaArtistas : any[]=[];

  constructor(private sportifyService:SpotifyService ) { }

  buscar(termino: string) {
    this.sportifyService.getArtist(termino,"artist")
    .subscribe( (params:any[])=>{
      console.log(params);

      this.busquedaArtistas=params.artists.items;
      console.log(this.busquedaArtistas);
    })

    
    
  }

 

}
