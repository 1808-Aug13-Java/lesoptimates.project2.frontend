import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../models/Recipe';
import { SavedRecipesComponent } from '../saved-recipes/saved-recipes.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nonusersearch',
  templateUrl: './nonusersearch.component.html',
  styleUrls: ['./nonusersearch.component.css']
})
export class NonusersearchComponent implements OnInit {

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

  saveRecipe(json){ 


    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
   
    this.recipe = {
      userId: "5",
      JSON: json
    }
    console.log(this.recipe);
    let body = `userId=${this.recipe.userId}&JSON=${JSON.stringify(this.recipe.JSON)}`;

    this.httpClient.post("http://localhost:8080/lesoptimates.project2.backend/recipes/save",body,  headers )
    .subscribe( (data:any) => {
      this.response = data.recipes;
      console.log(this.response);
    });

    this.showRecipe();
  }
  
  ngOnInit() {
  }

}
