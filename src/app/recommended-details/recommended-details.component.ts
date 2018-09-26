import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeUsers } from '../../models/RecipeUsers';
import { Recipe } from '../../models/Recipe';
@Component({
  selector: 'app-recommended-details',
  templateUrl: './recommended-details.component.html',
  styleUrls: ['./recommended-details.component.css']
})
export class RecommendedDetailsComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  recipeChefs: Recipe[];
  res:any;
  showChefRecipes() {
    this.recipeService.getChefRecipes()
      .subscribe( (data: RecipeUsers[]) => {
        //this.recipeChefs = data;
        //recipes = recipeChefs
        for (var i=0; i<data.length; i++){
          //console.log(data[i].recipeJSON);
          JSON.parse(data[i].recipeJSON);
          console.log(this.res);
          //this.recipeChefs.push(data[i].recipeJSON);
    //this.recipeChefs.push(JSON.parse(data[i].recipeJSON))
        }
        //this.recipeChefs = JSON.parse(data);
      });
  }
  ngOnInit() {
    this.showChefRecipes();
  }

}
