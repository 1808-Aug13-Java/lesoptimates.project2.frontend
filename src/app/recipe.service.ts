import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipe: Recipe;

  constructor(private httpClient: HttpClient) { }
  response:any;

  showRecipe() {
    this.httpClient.get("https://www.food2fork.com/api/search?key=1f15f4b4b0d1f534478e53ac0e52e894")
      .subscribe( (data:any) => {
        this.response = data.recipes;
        console.log(this.response);
      });
  }

  showUserRecipes(){

    this.httpClient.get("http://localhost:8080/lesoptimates.project2.backend/recipes")
    .subscribe( (data:any) => {
  
      for (var i=0; i<data.length; i++){
        data[i].recipeJSON = JSON.parse(data[i].recipeJSON);
  
      }
  
      console.log(data);
      this.response = data;
      
    });

  }


  saveRecipe(json){ 


    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
   
    // this.recipe = {
    //   userId: "5",
    //   JSON: json
    // }
    // console.log(this.recipe);
    // let body = `userId=${this.recipe.userId}&JSON=${JSON.stringify(this.recipe.JSON)}`;

    // this.httpClient.post("http://localhost:8080/lesoptimates.project2.backend/recipes/save",body,  headers )
    // .subscribe( (data:any) => {
    //   this.response = data.recipes;
    //   console.log(this.response);
    // });

    this.showRecipe();
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
    });

  }

}
