import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private route:Router,private act_route:ActivatedRoute){

  }
  ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyAw2NwywZdSjIEwh2Sq1WMGwnlEfqSWCug",
   authDomain: "angular2-8bdc0.firebaseapp.com"
 });
  }
  navigate(){
  	//this.route.navigate(['/user/1/ashok'],{relativeTo:this.act_route});
    this.route.navigate(['/user',3,'ashok'],{queryParams:{allowParams:4},fragment:"dashboard"});
  }
}
