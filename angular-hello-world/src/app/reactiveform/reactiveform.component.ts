import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
answer=['Yes','No'];
signupform:FormGroup;
  constructor() { }

  ngOnInit() {
  	this.signupform=new FormGroup({
  		'userData':new FormGroup({
  		'username':new FormControl(null,Validators.required),
  		'department':new FormControl(null,Validators.required)
  		}),
  		'experiance':new FormControl("three",Validators.required),
  		'answer':new FormControl("Yes",Validators.required),
  		'reply':new FormControl(null,Validators.required)
  	});
  }

  onSubmit(){
  	console.log(this.signupform);
  }

}
