// /*
// ============================================
// ; Title: Exercise 5.2
// ; Author: Professor Krasso
// ; Date: 9 August 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Navigation and Layout
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
    this.assignment = 'Exercise 5.3 - Data Tables';
  }
}
