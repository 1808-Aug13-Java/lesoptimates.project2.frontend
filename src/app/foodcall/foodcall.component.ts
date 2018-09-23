import { Component, OnInit } from '@angular/core';
import { FoodcallService } from '../foodcall.service';
<<<<<<< HEAD
import { Recipe } from '../models/Recipe';
=======
import { Recipe } from '../../models/Recipe';
>>>>>>> feature-jonathan
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-foodcall',
  templateUrl: './foodcall.component.html',
  styleUrls: ['./foodcall.component.css']
})
export class FoodcallComponent implements OnInit {

  recipe: Recipe;
  constructor(private foodcallService: FoodcallService, private httpClient: HttpClient){ 
  }
  response:any;
  showRecipe() {
    this.httpClient.get("https://www.food2fork.com/api/search?key=be39b50b44c08b2d0f97d97a60b8191b")
      .subscribe( (data:any) => {
        this.response = data.recipes;
<<<<<<< HEAD
=======
        console.log(this.response);
>>>>>>> feature-jonathan
      });
  }
  ngOnInit() {
  }

}
