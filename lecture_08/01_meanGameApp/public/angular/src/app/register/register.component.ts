import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // this.registrationForm = new FormGroup({
    //   name: new FormControl("Jack"),
    //   username: new FormControl("Jack"),
    //   password : new FormControl("Jack")
    // })
    this.registrationForm = this.formBuilder.group({
      name: "Jack", 
      username: "jack",
      password: "password"
    })
  }

  ngOnInit(): void {

  }

  register(){
    console.log("registration submitted")
    console.log(this.registrationForm.value)
  }
}
