import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthFire{
  signupuser(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(
    	error=>console.log(error)
    	)

  }
  signinuser(email:string,password:string){
  	firebase.auth().signInWithEmailAndPassword(email,password).then(
  		response=>console.log(response)
  		)
  	.catch(error=>console.log(error)
  		)
  }
}
