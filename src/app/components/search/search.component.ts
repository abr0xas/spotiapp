import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  private busquedaArtistas : any[]=[];
  private loading : boolean;
  constructor(private sportifyService:SpotifyService ) { 
    this.loading=true;
  }

  buscar(termino: string) {
    this.sportifyService.getArtist(termino,"artist")
    .subscribe( (params:any[])=>{
      console.log(params);

      this.busquedaArtistas=params;
      this.loading=false;
      console.log(this.busquedaArtistas);
    })

    
    
  }

 

}
