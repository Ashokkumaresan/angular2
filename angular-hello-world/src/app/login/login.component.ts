import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import { LoginService } from '../Logging.service';
import { AuthService } from '../auth.service';
import { ActivateUser } from '../activate.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { CanComponentDeactivate } from '../deactivate.guard.service';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

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
export class LoginComponent implements CanComponentDeactivate, OnInit,OnDestroy{
	numsubcription:Subscription[]=[];
	username:string="ashokkumaresan";
	firstname:string="KUmaresan";
	iscomplete:boolean=true;
	lastname:string='Trisha';
	fullname:string='';
	isClicked:boolean=false;	
	nameList=[];
	constructor( private log:LoginService,private authservice:AuthService,private useractivate:ActivateUser ){
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
	const myNumbers=Observable.interval(1000)
	.map((data:number)=>{
		return data*2;
	});
	this.numsubcription.push(myNumbers.subscribe(
		(num:number)=>{
			console.log(num);
		}
		));
//this.numsubcription.push(myNumbers);
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

	this.numsubcription.push(myObservable.subscribe(
		(data:string)=>{
			console.log(data);
		},
		(error:string)=>{
			console.log(error);
		},
		()=>{
			console.log("Observer Completed");
		}
		));
	//this.numsubcription.push(myObservable);
}
ngOnDestroy(){
	this.numsubcription.forEach(s=>s.unsubscribe());
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
activate(){
this.useractivate.userActivated.next(this.username);
}
}