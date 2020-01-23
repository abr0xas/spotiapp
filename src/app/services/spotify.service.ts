import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {
    console.log("dentro spotify service");
  }

  getToken() {
    const params = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', '0a0da8fa0e02421fbe2b2cf1fd0de39f')
      .set('client_secret', 'e344c565c2954fbdac62d4656f440e0a');

    return this.http.post("https://accounts.spotify.com/api/token", params);
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQAwSKUtoY95MOop-brPKMpHYbIzduu-OY-Xd_NZv4wneS1C7FZ22YsRY1CRV3DRJU7ERWCj_7ft0V6pYMM"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
    .pipe( map( data =>  data['albums'].items))

  }

  getArtist(artist:string, type:string) {
    const params = new HttpParams()
      .set('q', artist)
      .set('type', type);  
    const headers = new HttpHeaders({
      'Authorization':  "Bearer BQAwSKUtoY95MOop-brPKMpHYbIzduu-OY-Xd_NZv4wneS1C7FZ22YsRY1CRV3DRJU7ERWCj_7ft0V6pYMM"
    });

    return this.http.get("https://api.spotify.com/v1/search", {params, headers})
    .pipe( map( data => {
      return data['artists'].items;
    }))

  }

}
