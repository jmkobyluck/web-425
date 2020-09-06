import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-summary',
  templateUrl: './shop-summary.component.html',
  styleUrls: ['./shop-summary.component.css'],
})
export class ShopSummaryComponent implements OnInit {
  @Input() summary: number;
  @Input() name: string;
  @Input() price: number;

  constructor() {}

  ngOnInit(): void {}
}
