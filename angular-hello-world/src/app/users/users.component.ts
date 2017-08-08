import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Data } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] 
})
export class UsersComponent implements OnInit {
	user: {id: number,name: string};
  constructor(private route:ActivatedRoute,private uservice:UserService) { }

  ngOnInit() {
 /*var res= this.uservice.onUserLoad();
      this.user={
      id:res['id'],
      name:res['name']
    }; */

    this.route.data.subscribe(
      (data:Data)=>{
        this.user=data['uresolve'];
      }
      );


  }



}
