import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  users: any;
  showChefs() {
    this.recipeService.getChefs()
      .subscribe( (data:any) => {
        this.users = data;
        console.log(this.users);    
      }); 
  }
  ngOnInit() {
    this.showChefs();
  }
}
