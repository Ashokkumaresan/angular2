import { EventEmitter } from '@angular/core';

export class LoginService{
	loginConsole(msg:string){
		console.log("Logging from Angular App "+msg);
	}

	showStatus = new EventEmitter<string>();
}