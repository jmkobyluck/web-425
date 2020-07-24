// /*
// ============================================
// ; Title: Assignment 3.3
// ; Author: Professor Krasso
// ; Date: 24 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Passing Data to Routes, Part 2
// ;===========================================
// */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
