import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { SearchComponent } from '../search/search.component';
>>>>>>> feature-jonathan

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
<<<<<<< HEAD

=======
  results:any[] = SearchComponent["results"];
>>>>>>> feature-jonathan
  ngOnInit() {
  }

}
