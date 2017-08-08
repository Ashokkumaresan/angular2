import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Data } from '@angular/router';


@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
errorMessage:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  	//this.errorMessage=this.route.snapshot.data['message'];
  	this.route.data.subscribe(
  		(data:Data)=>{
  			this.errorMessage=data['message'];
  		}
  		);
  }

}
