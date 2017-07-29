import { Component,Input } from '@angular/core';
import { LoginService } from '../Logging.service';


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
export class LoginComponent{
	username:string="ashokkumaresan";
	firstname:string="KUmaresan";
	iscomplete:boolean=true;
	lastname:string='Trisha';
	fullname:string='';
	isClicked:boolean=false;	
	nameList=[];
	constructor( private log:LoginService ){
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
}


last_name(event:Event){
this.fullname=(<HTMLInputElement>event.target).value + this.lastname;
}
}