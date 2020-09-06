import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

interface IService {
  name: string;
  price: number;
}

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css'],
})
export class ShopHomeComponent implements OnInit {
  selectedOptions: Array<IService>;

  selectableServices: Array<IService> = [
    { name: 'Password Reset', price: 50 },
    { name: 'Spyware Removal', price: 75 },
    { name: 'Software Install', price: 25 },
    { name: 'Keyboard Cleaning', price: 20 },
    { name: 'Disk Clean-up', price: 100 },
    { name: 'System Restore', price: 75 },
  ];

  selectableParts: Array<IService> = [
    { name: 'Motherboard', price: 200 },
    { name: 'Hard Drive', price: 125 },
    { name: 'Graphics Card', price: 300 },
    { name: 'Desktop Chassis', price: 85 },
    { name: 'Sound Card', price: 65 },
    { name: 'Keyboard', price: 50 },
  ];

  summaryEntries: Array<IService> = [];
  summary: number = 0;

  onChange(change: MatSelectionListChange) {
    console.log(change.option.value, change.option.selected);
    if (this.selectedOptions) {
      if (change.option.selected) {
        this.selectedOptions.push(change.option.value);
      } else {
        this.selectedOptions = this.selectedOptions.filter(
          (opt: IService) => opt.name != (change.option.value as IService).name
        );
      }
    } else {
      this.selectedOptions = [change.option.value];
    }
    console.log(this.selectedOptions);

    this.summary = this.selectedOptions.reduce((a, b) => a + b.price, 0);
    console.log(this.summary);
  }

  constructor() {}

  ngOnInit(): void {}
}
