import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;

  constructor(private httpClient: HttpClient) {  }
  response:any;
  ngOnInit() {
    // this.httpClient.get('http://localhost:8080/lesoptimates.project2.backend/token', {withCredentials:true}).subscribe( (data:any) => {
    //   this.token = data;
    //   console.log(this.token);
    // });
  }

  login(){
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      }), withCredentials:true
    };   
    let body = `userName=${this.username}&pswd=${this.password}`;
    this.httpClient.post("http://localhost:8080/lesoptimates.project2.backend/login",body,  headers )
      .subscribe( (data:any) => {
        this.response = data;
        console.log(this.response);
        this.getSession();
        this.ngOnInit();
      });
  }

  getSession() {
    this.httpClient.get("http://localhost:8080/lesoptimates.project2.backend/session", {withCredentials:true})
      .subscribe( (data:any) => {
        this.response = data;
        console.log(this.response);
      });
  }

  logout(){
    this.httpClient.get("http://localhost:8080/lesoptimates.project2.backend/logout",{withCredentials:true}).subscribe();
  }
}
