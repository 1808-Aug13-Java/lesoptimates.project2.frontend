 import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './validatePswd';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  

  profileForm: FormGroup;

  onSubmit() {
    console.log(this.profileForm);
  }

  constructor(fb: FormBuilder)
  {
    this.profileForm = fb.group({
      userName: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('', Validators.required),
      testPassword: new FormControl('', Validators.required)
    },{
      validator: PasswordValidation.MatchPassword 
    })
  }

  // constructor(public username: string, public name: string,
  //             public email: string, public pswd0: string, public pswd1: string ) { }

  ngOnInit() {
  }

}
