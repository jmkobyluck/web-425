// /*
// ============================================
// ; Title: Assignment 6.4
// ; Author: Professor Krasso
// ; Date: 16 August 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Input Properties
// ;===========================================
// */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
