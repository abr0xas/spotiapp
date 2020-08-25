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
  loading: boolean;
  error:boolean;
  errorMessage: string;



  constructor(private sportifyService: SpotifyService) {
    this.error=false;
    this.loading=true;
    this.sportifyService.getToken();

    this.sportifyService.getNewReleases()
      .subscribe((data:any) => {
        this.nuevasCanciones=data;
        console.log(data);
        this.loading = false;

      }, ( errorService ) => {
        this.loading=false;
        this.error=true;
        this.errorMessage = errorService.error.error.message;
        console.log("dentro serviceError");
        console.log(errorService);
        console.log(errorService.error.error.message);
      }) ;

  }



}
