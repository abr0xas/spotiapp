import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];



  constructor(private sportifyService: SpotifyService) {
    this.sportifyService.getToken();

    this.sportifyService.getNewReleases()
      .subscribe((data:any) => {
        this.nuevasCanciones=data.albums.items;
        console.log(data.albums.items);

      });

  }



}
