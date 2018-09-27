import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  isLoggedIn: Observable<boolean>;

  constructor(private route: ActivatedRoute,
    private router: Router, private sessionService: SessionService, private recipeService: RecipeService) {
  } 

  recipeSearch: string;
  getSearchVal(value: string) { this.recipeSearch = value; }
  response:any;
  chefs: User[];

  showRecipe() {
    console.log(this.recipeSearch);
    this.router.navigate(['/search'], { queryParams: { str:this.recipeSearch } });
  }


  ngOnInit() {
    this.sessionService.getSessionPromise().then((data:any) => {
      if(data){
        this.sessionService.isValidSession(true);
      }
        })
    this.isLoggedIn = this.sessionService.isLoggedIn;
    this.recipeService.getChefs().subscribe( (data:User[]) => {
      this.chefs = data;
      console.log("chefs:" + this.chefs);
    });

  }

}
