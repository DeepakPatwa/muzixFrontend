import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {

  public alltracks;
  constructor(public _route: ActivatedRoute, private router: Router, public muzixservice:MuzixHttpService) { }

  ngOnInit() {
    
    this.alltracks=this.muzixservice.getalltracks().subscribe(
      data => {
        this.alltracks = data;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
  }

}
