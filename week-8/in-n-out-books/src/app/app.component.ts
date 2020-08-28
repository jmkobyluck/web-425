// /*
// ============================================
// ; Title: Exercise 8.2
// ; Author: Professor Krasso
// ; Date: 25 August 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Server Side Communications
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
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
