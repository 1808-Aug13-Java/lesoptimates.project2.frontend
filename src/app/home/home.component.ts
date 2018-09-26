import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService,
    private router: Router
  ) { }
    response:any;
    userId:string;
    @Input() username: string;
    @Input() password: string;
  
    ngOnInit() {  
      this.sessionService.getSessionPromise().then((data:any) => {
        if(data!=null){
          this.userId = data.userId;
          console.log(this.userId);
  
          this.httpClient.get("http://localhost:8080/lesoptimates.project2.backend/recipes/users/"+this.userId)
          .subscribe( (data:any) => {
      
            for (var i=0; i<data.length; i++){
              data[i].recipeJSON = JSON.parse(data[i].recipeJSON);
      
            }
      
            console.log(data);
            this.response = data;
            
          });
        }
        else{
          this.router.navigateByUrl("/login");
        }
      });
    }

    deleteRecipe(recipeId){ 
  
  
      const headers = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded'
        })
      };
     
  
      let body = `recipeId=${recipeId}`;
  
      this.httpClient.post("http://localhost:8080/lesoptimates.project2.backend/recipes/delete",body,  headers )
      .subscribe( (data:any) => {
        this.response = data.recipes;
        console.log(this.response);
        this.ngOnInit();
      });
  
    }

}
