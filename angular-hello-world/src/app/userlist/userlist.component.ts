import { Component, OnInit ,Input ,ViewEncapsulation,OnDestroy,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class UserlistComponent implements OnInit ,OnDestroy,OnChanges{
	@Input('userl') element:{empname:string,country:string};
	@Input() emp:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
  	console.log("Delete working");
  }
  ngOnChanges(change:SimpleChanges){
  	console.log(change);
  }
  change(){
  	this.element.empname="Trisha Krishnan";
  }

}
