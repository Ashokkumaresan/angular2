import { Component,Input } from '@angular/core';
import { LoginService } from '../Logging.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from '../deactivate.guard.service';

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
export class LoginComponent implements CanComponentDeactivate{
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