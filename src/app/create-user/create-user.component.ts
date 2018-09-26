 import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormValidation } from './validatePswd';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  profileForm: FormGroup;
  
  // onSubmit() {
  //   console.log(this.profileForm);
  // }

  constructor(fb: FormBuilder, private fv: FormValidation)
  {
    this.profileForm = fb.group({
      userName: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      testPassword: new FormControl('', Validators.required)
    },{
      validator: fv.ValidateForm 
    })
  }

  htmlButton = true;
  bsButton = false;

  ngOnInit() {
  }

}
