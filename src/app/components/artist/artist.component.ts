import { Component  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any;
  topTracks:any;
  loading: boolean;
  constructor( private activatedRouter:ActivatedRoute,
               private spotifyService : SpotifyService) {
                 activatedRouter.params.subscribe(
                   params => {
                     this.getAnArtist(params['id']);
                     
                    }
                  )                   
                }

                getAnArtist(id:string){
                  this.spotifyService.getAnArtist(id).subscribe(
                    data => {
                      this.artist=data;
                      this.loading=false;
                      console.log(data);
                      this.getTopTracks(id);
                    }
                  )
                }

                getTopTracks( id: string) {
                  this.spotifyService.getTopTracks(id).subscribe(
                    data => {
                      this.topTracks = data;
                      console.log("topTracks : ");
                      console.log(this.topTracks);
                    }
                      )
                }
              }
