// /*
// ============================================
// ; Title: Assignment 2.4
// ; Author: Professor Krasso
// ; Date: 15 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Routing in Action
// ;===========================================
// */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Hildegard von Bingen', 'Classical'),
      new Composer('John Dunstable', 'Classical'),
      new Composer('Giovanni Pierluigi da Palestrina', 'Classical'),
      new Composer('William Byrd', 'Classical'),
      new Composer('Henry Purcell', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}
