// /*
// ============================================
// ; Title: Assignment 3.2
// ; Author: Professor Krasso
// ; Date: 24 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Passing Data to Routes, Part 1
// ;===========================================
// */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/composers',
    pathMatch: 'full',
  },
  {
    path: 'composers',
    component: ComposerListComponent,
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
