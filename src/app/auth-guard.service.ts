import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate { 
  session: any;
  constructor(
    private sessionService: SessionService, 
    private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.sessionService.getCurrentUserId == null) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}

