import { Observable } from 'rxjs/Observable';
import {ActivatedRouteSnapshot,RouterStateSnapshot,CanDeactivate} from '@angular/router';
export interface CanComponentDeactivate{
	canDeactivate:()=> Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
	canDeactivate(component:CanComponentDeactivate,currentRoute:ActivatedRouteSnapshot,currentstate:RouterStateSnapshot,nextstate:RouterStateSnapshot)
	:Observable<boolean> | Promise<boolean> | boolean{
		return component.canDeactivate()
	}
}