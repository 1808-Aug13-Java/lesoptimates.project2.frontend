import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeUsers } from '../../models/RecipeUsers';
import { Recipe } from '../../models/Recipe';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recommended-details',
  templateUrl: './recommended-details.component.html',
  styleUrls: ['./recommended-details.component.css']
})
export class RecommendedDetailsComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route:ActivatedRoute) { }
  recipeChefs: Recipe[] = [];
  res:any;
  
  showChefRecipes(id:number) {
    console.log(this.route.params)
    this.recipeService.getChefRecipes(id)
      .subscribe( (data: RecipeUsers[]) => {
        console.log(data);    
        for (var i=0; i<data.length; i++){
          this.res = JSON.parse(data[i].recipeJSON);
          this.recipeChefs.push(this.res);
        }
      });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.showChefRecipes(params['id']);
    });
 
  }

}
