import { Component, OnInit, Output, Input, OnChanges, SimpleChanges,DoCheck,OnDestroy } from '@angular/core';
import { LoginService } from '../Logging.service';
import { ActivateUser } from '../activate.service';


@Component({
 // selector: '[app-dashboard]',
 	selector:'.app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,OnChanges, DoCheck,OnDestroy{
	username:string="ashokkumaresan";
	firstname:string="Ashok";
	userExists:boolean=false;	
	userLists=[{empname:"Trisha",country:"India"},{empname:"Ashok",country:"India"}];
  sub_username:string="Not Activated";
  constructor(private log:LoginService,private useractivate:ActivateUser) { 
  	this.userExists=Math.random() > 0.5 ? true:false;

        this.log.showStatus.subscribe(
      function(status:string){
        alert("Injectable service "+status);
      }
      );

     this.useractivate.userActivated.subscribe(
       (uname:string)=>{
         if(uname=="ashokkumaresan")
             this.sub_username="Activated";
           else
             this.sub_username="Not Activated";

       }
     )   
  }

  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges){
  	console.log("ngOnchanges");
  	console.log(changes);
  }
  onCreated(userData:{empname:string,country:string}){
  	this.userLists.push({empname:userData.empname,country:userData.country});
  }

  getUserStatus(){
  	return this.userExists==true ? 'green' : 'red';
  }
  userStatus(){
  	this.userExists==false?true:false;
  }
  onNameChange(){
  	this.userLists.splice(0,1);
  }

  ngDoCheck(){
  	console.log("Do Check called");
  }
  ngOnDestroy(){
  	console.log("element deleted");
  }
}
