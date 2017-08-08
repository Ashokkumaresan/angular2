import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
interface Iuser{
	id:number;
	name:string;
}
@Injectable()
export class UserResolver implements Resolve<Iuser>{
	constructor(private uservice:UserService){ }
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Iuser> | Promise<Iuser> | Iuser {
	return this.uservice.onUserLoad();
}
}