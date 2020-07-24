// /*
// ============================================
// ; Title: Assignment 3.4
// ; Author: Professor Krasso
// ; Date: 24 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Guarding Routes
// ;===========================================
// */

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
