import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AuthFire } from './authenticate/authfire.service';

@Injectable()
export class formService {
  constructor(private http: Http,private authService:AuthFire ){}
sendData(empDetails:any[]){
  return this.http.post("https://angular2-8bdc0.firebaseio.com/empdata.json",empDetails);
}
getData(){
  const token=this.authService.getToken();
  return this.http.get("https://angular2-8bdc0.firebaseio.com/empdata.json?auth="+token)
  .map(
    (response:Response)=>{
      const data=response.json();
      return data;
  }
).catch(
  (error:Response)=>{
    return Observable.throw("Invalid Service End Point");
  }
);
}

getSingleData(){
   const token=this.authService.getToken();
  return this.http.get("https://angular2-8bdc0.firebaseio.com/appName.json?auth="+token).map(
    (response:Response)=>{
      const data=response.json();
      return data;
    }
  )
}
}
