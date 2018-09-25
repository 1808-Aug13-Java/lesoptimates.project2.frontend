import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userId:string;

  constructor(private httpClient: HttpClient) { }

  getSession():any {
    this.httpClient.get("http://localhost:8080/lesoptimates.project2.backend/session", {withCredentials:true})
      .subscribe( (data:any) => {
        if(data!=null){
          this.userId = data.userId;
          console.log(this.userId);
        }
      });
      return this.userId;
  }

  getSessionPromise():Promise<string> {
    return this.httpClient.get<string>("http://localhost:8080/lesoptimates.project2.backend/session", {withCredentials:true}).toPromise();
  }
}
