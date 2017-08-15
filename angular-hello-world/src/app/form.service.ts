import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class formService {
  constructor(private http: Http){}
sendData(empDetails:any[]){
  return this.http.post("https://angular2-8bdc0.firebaseio.com/empdata.json",empDetails);
}
getData(){
  return this.http.get("https://angular2-8bdc0.firebaseio.com/empdata.json")
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
  return this.http.get("https://angular2-8bdc0.firebaseio.com/appName.json").map(
    (response:Response)=>{
      const data=response.json();
      return data;
    }
  )
}
}
