import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-searchtrack',
  templateUrl: './searchtrack.component.html',
  styleUrls: ['./searchtrack.component.css']
})
export class SearchtrackComponent implements OnInit {

  trackname:string;
  constructor(private _route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }
  search():any{
    trackname:this.trackname;
    console.log(this.trackname);
    this.router.navigate(['/searchtrack',this.trackname]);
  }

}
