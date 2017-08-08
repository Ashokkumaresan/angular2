import { Injectable } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Injectable()
export class UserService{
		user: {id: number,name: string};
	  constructor(private route:ActivatedRoute) { }	

onUserLoad(){
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
   this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
      }
      );
   return this.user;
  }
}