// /*
// ============================================
// ; Title: Assignment 3.3
// ; Author: Professor Krasso
// ; Date: 24 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Passing Data to Routes, Part 2
// ;===========================================
// */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn, skipLocationChange: true },
    });
  }
}
