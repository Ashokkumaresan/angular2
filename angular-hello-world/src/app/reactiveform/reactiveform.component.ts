import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
answer=['Yes','No'];
randamnum=[23,45,65,34,67,87,97,75,54,39,78,23,48,453,786];
signupform:FormGroup;
appstatus=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Active");
  },2000);
});
  constructor() { }

  ngOnInit() {
  	this.signupform=new FormGroup({
  		'userData':new FormGroup({
  		'username':new FormControl("",[Validators.required,this.limitLength.bind(this)]),
  		'department':new FormControl("",[Validators.required],this.checkDepart)
  		}),
  		'experiance':new FormControl("three",Validators.required),
  		'answer':new FormControl("Yes",Validators.required),
  		'reply':new FormControl("sss")
  	});

    this.signupform.statusChanges.subscribe(
      (value)=>{
        console.log(value);
      }
    )
  }

  onSubmit(){
  	console.log(this.signupform);
  }

  limitLength(control:FormControl):{[s:string]:boolean} {
    if(control.value.length>10)
      return{'Invalid length':true};
    else
      return null;
  }

  checkDepart(control:FormControl):Promise<any> | Observable<any>{
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=="BI")
        resolve({"InvalidDepartment":true});
        else
        resolve(null);
      },1500)
    });
    return promise;
  }

}
