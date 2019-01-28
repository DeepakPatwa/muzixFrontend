import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MuzixHttpService {

  public lastfmapiurl='http://ws.audioscrobbler.com/2.0';
  public authToken='392b64106d57caafd201f029ffa0349b';

  public muzixAppbackendUrl='http://localhost:8080/muzix/v1/'

  public alltracks;

  constructor(private _http:HttpClient) { 
    console.log("http srvice got called")
  }

  public searchtrack(trackname): any {
    this.alltracks=this._http.get(this.lastfmapiurl+'/?method=track.search&track='+trackname+'&api_key='+this.authToken+'&format=json')
    console.log(this.alltracks);
    return this.alltracks;
  }

  public  findtrack(mid):any {
    let trackinfo=this._http.get(this.lastfmapiurl+'/?method=track.getInfo&api_key='+this.authToken+'&mbid='
    +mid+'&format=json');
    
    return trackinfo;
     }

  public savetrack(trackifo):any
  {               
    let savrtrack=this._http.post(this.muzixAppbackendUrl+'insertTrack',trackifo);
    console.log(trackifo);
    return savrtrack;
  }
}
