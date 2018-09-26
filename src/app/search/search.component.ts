import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../models/Recipe';
import { HttpHeaders } from '@angular/common/http';
import { SessionService } from '../session.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipe: Recipe;
  userId: string;
  //key1: d163d5127df3dc954c85893da2da4f2e 
  //key2: 1f15f4b4b0d1f534478e53ac0e52e894

  constructor(private httpClient: HttpClient,
  private sessionService: SessionService,
  private recipeService: RecipeService) { }

  ngOnInit() {}

  showRecipe() {
    let response:any;
    let recipes, savedRecipes: any[];
    let currentUser:string = this.sessionService.getCurrentUserId();

    if(currentUser){
      savedRecipes = this.recipeService.returnUserRecipes(currentUser);
    }

    this.httpClient.get("https://www.food2fork.com/api/search?key=d163d5127df3dc954c85893da2da4f2e")
      .subscribe( (data:any) => {
        response = data.recipes;
        console.log(response);
      });

      for(let r of response){
        for(let s of savedRecipes){
          //TODO:if()
        }


      }
  }

  saveRecipe(userId,json){ 


    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
   
    console.log(this.recipe);
    let body = `userId=${userId}&JSON=${JSON.stringify(json)}`;

    this.httpClient.post("http://localhost:8080/lesoptimates.project2.backend/recipes/save",body,  headers )
    .subscribe( (data:any) => {
  
    });

    this.showRecipe();
  }

}
