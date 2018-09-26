import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  isLoggedIn: Observable<boolean>;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    if(this.sessionService.getCurrentUserId()){}
    this.isLoggedIn = this.sessionService.isLoggedIn;
  }

}
