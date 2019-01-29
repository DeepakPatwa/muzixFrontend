import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-updatetrack',
  templateUrl: './updatetrack.component.html',
  styleUrls: ['./updatetrack.component.css']
})
export class UpdatetrackComponent implements OnInit {

  public mid1: string;
  public comments: string;
  public updatedtracks: string;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

  ngOnInit() {
    this.mid1 = this._route.snapshot.paramMap.get('mbid');
  this.comments = this._route.snapshot.paramMap.get('comment');
  console.log("updatecom " + this.mid1 + ' ' + this.comments);
  this.updatedtracks=this.muzixservice.updateTrack(this.mid1, this.comments).subscribe(
    data => {
      this.updatedtracks = data;
    },
    error => {
      console.log('some error occured in Update Track');
      console.log(error.errorMessage);
    }
  );
  }

}
