import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  hero={
    id:"1",
    name:"Edgar"
  }
  formGroup!:FormGroup;


  constructor(private formB:FormBuilder) 
  { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup=this.formB.group({
      name:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      contrasena:["",Validators.required],
      numero:["",Validators.required]
    })
  }
  submit(){
    console.log(this.formGroup.value)
  }

}