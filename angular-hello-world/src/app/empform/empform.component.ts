import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {
@ViewChild('empform') empform:NgForm;
defaultexp:string="three";
reply:any='';
answer=['Yes','No'];
empuser={
  name:'',
  dep:'',
  ans:'',
  comment:''
}
  constructor() { }

  ngOnInit() {
  }
  
  /*onSubmit(form:NgForm){
  	console.log(form);
  }*/
  onSubmit(){
  	console.log(this.empform);
    this.empuser.name=this.empform.value.empData.empname;
    this.empuser.dep=this.empform.value.empData.empdepartment;
    this.empuser.ans=this.empform.value.answer;
    this.empuser.comment=this.empform.value.question;
  }
  suggest(){
   // this.empform.reset();
    this.empform.form.patchValue({
      empData:{
        empname:"Ashok",
        empdepartment:"BI"
      },
      answer:"Yes"
    });
  }

}
