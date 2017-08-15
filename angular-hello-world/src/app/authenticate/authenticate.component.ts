import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthFire } from './authfire.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private auth:AuthFire) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.auth.signinuser(email,password);
  }


}
