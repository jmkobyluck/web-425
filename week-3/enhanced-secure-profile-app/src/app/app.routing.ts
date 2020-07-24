// /*
// ============================================
// ; Title: Assignment 3.4
// ; Author: Professor Krasso
// ; Date: 24 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Guarding Routes
// ;===========================================
// */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];
