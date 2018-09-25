import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  response:any;
  userId:string;

  ngOnInit() {

    this.getSession().then((data:any) => {
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
    });
  }

  getSession():Promise<string> {
    return this.httpClient.get<string>("http://localhost:8080/lesoptimates.project2.backend/session", {withCredentials:true}).toPromise();
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
