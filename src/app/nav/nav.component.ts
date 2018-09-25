import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  // didSearch = false;

  response:any;
  showRecipe() {
    let url = "https://www.food2fork.com/api/search?key=2ae4418069c000dc8c72aebc231c2e2d";
    //&q=chicken%20breast question string format
    this.httpClient.get("https://www.food2fork.com/api/search?key=2ae4418069c000dc8c72aebc231c2e2d")
      .subscribe( (data:any) => {
        this.response = data.recipes;
        console.log(this.response);
      });
  }

  ngOnInit() {
  }

}
