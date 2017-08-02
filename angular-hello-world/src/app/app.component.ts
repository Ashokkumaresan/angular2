import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';


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

  }
  navigate(){
  	//this.route.navigate(['/user/1/ashok'],{relativeTo:this.act_route});
    this.route.navigate(['/user',3,'ashok'],{queryParams:{allowParams:4},fragment:"dashboard"});
  }
}
