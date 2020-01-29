import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  cond:any;
  constructor(private router: Router,
    private service: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.service.IsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/home'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }

  canDeactivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot)
  {
    if (this.service.CheckAdmin()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
