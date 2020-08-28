// /*
// ============================================
// ; Title: Exercise 6.2
// ; Author: Professor Krasso
// ; Date: 16 August 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Output Properties
// ;===========================================
// */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
