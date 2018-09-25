import {AbstractControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-create-validate',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
  })

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}