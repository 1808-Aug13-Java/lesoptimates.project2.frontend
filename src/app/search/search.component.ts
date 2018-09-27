import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Recipe } from '../../models/Recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('saveToFavorites', [
      state('saved', style({
        backgroundColor: 'red'
      })),
      state('unsaved', style({
        backgroundColor: 'white'
      })),
      transition('saved => unsaved', [animate('1s')]),
      transition('unsaved => saved', [animate('1s')]),
    ]),
  ],
})
export class SearchComponent implements OnInit {
  recipe: Recipe;
  userId: string;
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private recipeService: RecipeService) {}
  response: any;
  search: any;
  searchStr: any;
  showRecipes (str: string) {
    console.log('showrecipescalled: ' + str);
    const url = 'https://www.food2fork.com/api/search?key=45358a7237f171a02820c89513e83c2a&q=' + str;
    console.log(url);
    this.httpClient.get(url)
      .subscribe( (data: any) => {
        console.log(data);
        this.response = data.recipes;
      });
  }
  getSession() {
    this.httpClient.get('http://localhost:8082/lesoptimates.project2.backend/session', {withCredentials: true})
      .subscribe( (data: any) => {
        if ( data != null) {
          this.userId = data.userId;
          console.log(this.userId);
        }
      });
  }
  showRecipe() {
    let response: any;
    const recipes, savedRecipes: any[];
    const currentUser: string = this.sessionService.getCurrentUserId();
    if ( currentUser) {
      savedRecipes = this.recipeService.returnUserRecipes(currentUser);
    }
    this.httpClient.get('https://www.food2fork.com/api/search?key=d163d5127df3dc954c85893da2da4f2e')
      .subscribe( (data: any) => {
        response = data.recipes;
        console.log(response);
      });
    for ( const r of response) {
      for ( const s of savedRecipes) {
        // TODO:if()
      }
    }
  }
  saveRecipe(userId, json) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    console.log(this.recipe);
    console.log('userId: ' + userId);
    const body = `userId=${userId}&JSON=${JSON.stringify(json)}`;
    this.httpClient.post('http://localhost:8082/lesoptimates.project2.backend/recipes/save', body, headers )
      .subscribe( (data: any) => {
      });
    this.showRecipe();
  }
  ngOnInit() {
    this.search = this.route
      .queryParams
      .subscribe(params => {
        this.showRecipes(params.str);
      });
  }
}
