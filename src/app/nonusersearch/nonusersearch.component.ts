import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../models/Recipe';
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

    //q=chicken%20breast
    this.httpClient.get("https://www.food2fork.com/api/search?key=2ae4418069c000dc8c72aebc231c2e2d")
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
