import { Component } from '@angular/core';
import { IProduct } from '../Model/iproduct';
import { TitleStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ICategory } from '../Model/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  Products: IProduct[];
  categories: ICategory[];
  totalprice: number = 0;
  idselected: number = 0;
  constructor() {
    this.Products = [
      {
        id: 1,
        title: 'HP',
        price: 1000,
        Stock: 1,
        description: 'HP Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
      },
      {
        id: 2,
        title: 'Dell',
        price: 1200,
        Stock: 5,
        description: 'Dell Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto',
      },
      {
        id: 3,
        title: 'Lenovo',
        price: 1100,
        Stock: 8,
        description: 'Lenovo Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/350x200/?text=World&font=lobster',
      },
      {
        id: 4,
        title: 'Asus',
        price: 1300,
        Stock: 15,
        description: 'Asus Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto',
      },
      {
        id: 5,
        title: 'Acer',
        price: 900,
        Stock: 20,
        description: 'Acer Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/250x100/ff0000/',
      },
      {
        id: 6,
        title: 'Apple',
        price: 2000,
        Stock: 3,
        description: 'Apple Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/350x200/?text=World&font=lobster',
      },
      {
        id: 7,
        title: 'Samsung',
        price: 1500,
        Stock: 7,
        description: 'Samsung Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 8,
        title: 'Microsoft',
        price: 1700,
        Stock: 4,
        description: 'Microsoft Laptop',
        category: 'Laptop',
        image: 'https://fakeimg.pl/350x200/?text=World&font=lobster',
      },
    ];
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

  Order(count: string, price: number) {
    this.totalprice += Number(count) * price;
  }
  onCategoryChange() {}
}
