import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    console.log("dentro spotify service");
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCuT8Uf7ry3HtBlxkvDt9sGLDGQLgtnjvQ171FBtENJ1b82EwqmL430JKpVw4IhodBZ43xPzRPDxD-dgVg'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers } );
    

  }
}
