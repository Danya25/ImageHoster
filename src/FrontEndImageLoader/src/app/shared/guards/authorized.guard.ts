import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service';
import {UserInformationService} from '../user-information.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService, private userInfo: UserInformationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getToken(localStorage.key(0))) {
      return true;
    } else {
      this.route.navigate(['auth/login'],
        {queryParams: {accessDenied: true}});
      return false;
    }
  }

}
