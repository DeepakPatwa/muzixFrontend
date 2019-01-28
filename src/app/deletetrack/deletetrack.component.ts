import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-deletetrack',
  templateUrl: './deletetrack.component.html',
  styleUrls: ['./deletetrack.component.css']
})
export class DeletetrackComponent implements OnInit {

  public alltracks;
  public mbid1;
  constructor(public _route: ActivatedRoute, private router: Router, public muzixservice:MuzixHttpService) { }

  ngOnInit() {

    this.mbid1 = this._route.snapshot.paramMap.get('mbid');
    console.log("meid:"+this.mbid1);
    this.muzixservice.deletetrack(this.mbid1).subscribe();
    // this.alltracks=this.muzixservice.getalltracks().subscribe(
    //   data => {
    //     this.alltracks = data;
    //   },'
    //   error =>{
    //     console.log("some error occured");
    //     console.log(error.errorMessage)
    //   }  
    // );
  }

}
