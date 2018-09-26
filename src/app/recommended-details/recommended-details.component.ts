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
  recipeChefs: Recipe[] = [];
  res:any;
  showChefRecipes() {
    this.recipeService.getChefRecipes(1)
      .subscribe( (data: RecipeUsers[]) => {
        for (var i=0; i<data.length; i++){
          this.res = JSON.parse(data[i].recipeJSON);
          this.recipeChefs.push(this.res);
        }
      });
  }
  ngOnInit() {
    this.showChefRecipes();
  }

}
