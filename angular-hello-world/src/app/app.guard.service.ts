import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AppGuard implements CanActivate{
	constructor(private authservice:AuthService,private route:Router){}
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
	return this.authservice.isAuthenticated()
	.then(
		(authenticated:boolean)=>{
			if(authenticated){
				return true;
			}
			else{
				this.route.navigate(['/']);
			}
		}
		);
}
}