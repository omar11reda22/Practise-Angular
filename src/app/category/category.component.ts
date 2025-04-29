import { Component, EventEmitter } from '@angular/core';
import { ICategory } from '../Model/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [FormsModule, CommonModule, ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: ICategory[];
  selectedcat: number;
  totalorderprice: number = 0;
  constructor() {
    this.totalorderprice = this.selectedcat = 0;
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tablet' },
      { id: 4, name: 'Watch' },
      { id: 5, name: 'Camera' },
      { id: 6, name: 'Headphone' },
      { id: 7, name: 'Speaker' },
      { id: 8, name: 'Printer' },
    ];
  }
  lolo(event: any) {
    this.totalorderprice = event;
  }
}
