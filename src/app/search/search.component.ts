import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Recipe } from '../../models/Recipe';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


/*
count: Number of recipes in result (Max 30)
recipes: List of Recipe Parameters ->
  image_url: URL of the image
  source_url: Original Url of the recipe on the publisher's site
  f2f_url: Url of the recipe on Food2Fork.com
  title: Title of the recipe
  publisher: Name of the Publisher
  publisher_url: Base url of the publisher
  social_rank: The Social Ranking of the Recipe (As determined by our Ranking Algorithm)
  page: The page number that is being returned (To keep track of concurrent requests)
  f2f_url: "http://food2fork.com/view/35382"
  image_url: "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg"
  publisher: "Closet Cooking"
  publisher_url: "http://closetcooking.com"
  recipe_id: "35382"
  social_rank: 100
  source_url: "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"
  title: "Jalapeno Popper Grilled Cheese Sandwich"

 */

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
  //key1: d163d5127df3dc954c85893da2da4f2e 
  //key2: 1f15f4b4b0d1f534478e53ac0e52e894
  //key3: 2ae4418069c000dc8c72aebc231c2e2d

  constructor(private httpClient: HttpClient, private route: ActivatedRoute,
    private router: Router) { }
  response:any;
  search: any;
  searchStr: any;

  showRecipes(str: string) {
    console.log("showrecipescalled: " + str)
    let url = "https://www.food2fork.com/api/search?key=2ae4418069c000dc8c72aebc231c2e2d&q=" + str;
    console.log(url);
    this.httpClient.get(url)
      .subscribe( (data:any) => {
        this.response = data.recipes;
        console.log(this.response);
      });
  }

/*   saveRecipe(json){ 

  response:any;
  isSaved = false;
  toggle() {
    this.isSaved = !this.isSaved;
  }
  showRecipe() {
    this.httpClient.get("https://www.food2fork.com/api/search?key=be39b50b44c08b2d0f97d97a60b8191b")
      .subscribe( (data:any) => {
        this.response = data.recipes;
        console.log(this.response);
      });
  }

  results = {
    "count": "30",
    "recipes":
    [
      {
  "f2f_url": "http://food2fork.com/view/35382",
  "image_url": "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
  "publisher": "Closet Cooking",
  "publisher_url": "http://closetcooking.com",
  "recipe_id": "35382",
  "social_rank": 100,
  "source_url": "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
  "title": "Jalapeno Popper Grilled Cheese Sandwich"
      }
    ]
  }

    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
   
    this.recipe = {
      userId: this.userId,
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
  } */

  getSession() {
    this.httpClient.get("http://localhost:8080/lesoptimates.project2.backend/session", {withCredentials:true})
      .subscribe( (data:any) => {
        if(data!=null){
          this.userId = data.userId;
          console.log(this.userId);
        }
      });
  }
  
  ngOnInit() {
    this.getSession();

    this.search = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.showRecipes(params.str);
    });
  }

}
