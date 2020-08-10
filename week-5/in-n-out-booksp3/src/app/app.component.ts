// /*
// ============================================
// ; Title: Assignment 5.4
// ; Author: Professor Krasso
// ; Date: 9 August 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Dialogs
// ;===========================================
// */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 5.4 - Dialogs';
  }
}
