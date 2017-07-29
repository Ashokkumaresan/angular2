import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customuser',
  templateUrl: './customuser.component.html',
  styleUrls: ['./customuser.component.css']
})
export class CustomuserComponent implements OnInit, OnChanges {
@Output('userC') userCreated=new EventEmitter<{empname:string,country:string}>();
@ViewChild('testvalue') test:ElementRef;
empname:string="";
country:string="";

  constructor() { 
  	console.log("From Constructor");
  }

  ngOnInit() {
	console.log("From Init");
  }
  ngOnChanges(changes:SimpleChanges){
  	console.log("ngOnChanges called");
  	console.log(changes);
  }
    onEmp(){
  /*	var emp:any=new Object();

  	emp["empname"]=this.empname;
  	emp["country"]=this.country;
  //	alert(this.empname);
this.userLists.push({empname:this.empname,country:this.country});*/
alert(this.test.nativeElement.value);
this.userCreated.emit({empname:this.empname,country:this.country})
}



}
