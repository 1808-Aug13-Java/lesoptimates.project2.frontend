import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-create-validate',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})

export class FormValidation {

    constructor() { }

    ValidateForm(AC: AbstractControl) {
        let password = AC.get('password').value;
        let confirmPassword = AC.get('testPassword').value;
        let email = AC.get('email').value;
        
        if (password != confirmPassword) {
            console.log('false');
            AC.get('testPassword').setErrors({ MatchPassword: true })
        } else {
            console.log('true');
            return null
        }
    }

}