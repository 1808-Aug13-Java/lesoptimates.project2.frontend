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
  response:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {}

  showRecipe() {
    let url = "https://www.food2fork.com/api/search?key=2ae4418069c000dc8c72aebc231c2e2d";
    //&q=chicken%20breast question string format
    this.httpClient.get("https://www.food2fork.com/api/search?key=2ae4418069c000dc8c72aebc231c2e2d")
      .subscribe( (data:any) => {
        this.response = data.recipes;
        console.log(this.response);
      });
  }

}
