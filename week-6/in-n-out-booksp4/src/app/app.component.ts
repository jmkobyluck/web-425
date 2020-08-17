// /*
// ============================================
// ; Title: Exercise 6.2
// ; Author: Professor Krasso
// ; Date: 16 August 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Output Properties
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1';
  }
}
