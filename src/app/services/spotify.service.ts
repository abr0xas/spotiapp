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


  getQuery(query: string, params?: any) {
    const headers = new HttpHeaders({
      'Authorization': "Bearer BQB9Ni19myo_CdZNi3V03HJETwaVWgcXbyarSX4P-_q8Qy9OifdomspW3kTMwstB4yBsJnxaza6Y95ISrFQ"
    });
    let options: any = { headers };
    if (params) {
      options = { headers, params };
    }
    console.log(query);
    return this.http.get(`https://api.spotify.com/${query}`, options);
  }

  getNewReleases() {
    return this.getQuery("v1/browse/new-releases")
      .pipe(map(data => data['albums'].items))
  }

  getArtist(artist: string, type: string) {
    const params = new HttpParams()
      .set('q', artist)
      .set('type', type);
    return this.getQuery("v1/search", params)
      .pipe(map(data => {
        return data['artists'].items;
      }))
  }
  getAnArtist(id: string ) {  

    return this.getQuery(`v1/artists/${id}`)
    
  }

  getTopTracks(id: string ) {  

    return this.getQuery(`v1/artists/${id}/top-tracks?country=us`)
    .pipe(map(data => data['tracks']))
    
  }
}
