import { Component,Input,OnInit } from '@angular/core';
import { LoginService } from '../Logging.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { CanComponentDeactivate } from '../deactivate.guard.service';
import 'rxjs/Rx';

@Component({
	selector:'app-login',
	//template:`<h1>First Component {{ username }} {{ firstname }}</h1>`,
	templateUrl:'./login.component.html',
	styles:[`
	h1 {
		color:green;
	}
	`]
	
})
export class LoginComponent implements CanComponentDeactivate, OnInit{
	username:string="ashokkumaresan";
	firstname:string="KUmaresan";
	iscomplete:boolean=true;
	lastname:string='Trisha';
	fullname:string='';
	isClicked:boolean=false;	
	nameList=[];
	constructor( private log:LoginService,private authservice:AuthService ){
	setTimeout(() => {
		this.iscomplete=false;
	},1000);
}
onLogin(){
	//this.iscomplete=true;
	this.isClicked=true;
	this.fullname=(<HTMLInputElement>event.target).value + this.lastname;
	this.nameList.push(this.fullname);
	var us=(<HTMLInputElement>event.target).value + this.username;
	//alert(us);
	this.log.loginConsole("Hello Service");
	this.log.showStatus.emit("Hello World");
	this.authservice.Login();
}
ngOnInit(){
	const myNumbers=Observable.interval(1000);
	myNumbers.subscribe(
		(num:number)=>{
			console.log(num);
		}
		);

	const myObservable=Observable.create((observer:Observer<string>)=>{
		setTimeout(function(){
			observer.next("First Observer");
		},2000);
		setTimeout(()=>{
			observer.next("Second Observer");
		},4000);
		setTimeout(()=>{
			observer.next("Error in Observer");
		},5000);
		setTimeout(()=>{
			observer.complete()
		},6000);
		setTimeout(()=>{
			observer.next("Third Observer");
		},8000);
	});

	myObservable.subscribe(
		(data:string)=>{
			console.log(data);
		},
		(error:string)=>{
			console.log(error);
		},
		()=>{
			console.log("Observer Completed");
		}
		);
}
last_name(event:Event){
this.fullname=(<HTMLInputElement>event.target).value + this.lastname;
}

canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
	if(this.lastname!="Trisha"){
		return confirm("Do you want to leave the page");
	}
	else
		return true;
}
}