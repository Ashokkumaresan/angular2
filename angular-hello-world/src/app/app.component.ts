import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


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
  	this.route.navigate(['/dashboard'],{relativeTo:this.act_route});
  }
}
