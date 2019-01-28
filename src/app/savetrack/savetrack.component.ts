import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-savetrack',
  templateUrl: './savetrack.component.html',
  styleUrls: ['./savetrack.component.css']
})
export class SavetrackComponent implements OnInit {

  public artist:string;
  public mbid1:string;
  public track:string;

  public trackinfo = {

    id : this.mbid1,
    name : this.track,
    comment : this.artist,

  }
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) {

   }

  ngOnInit() {
    this.mbid1 = this._route.snapshot.paramMap.get('mbid');
    console.log(this.mbid1)
    this.muzixservice.findtrack(this.mbid1).subscribe(

      data => {
        console.log(data)

        this.trackinfo.name=data.track.name;
        this.trackinfo.comment=data.track.artist.name;
        this.trackinfo.id=this.mbid1;
        let m = this.muzixservice.savetrack(this.trackinfo).subscribe(

         data=> {
           console.log(data);
         }
        );
        console.log(m);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }

}
