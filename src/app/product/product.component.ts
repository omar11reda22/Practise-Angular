import {
  Component,
  EventEmitter,
  Input,
  input,
  OnChanges,
  Output,
  output,
  SimpleChanges,
} from '@angular/core';
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
export class ProductComponent implements OnChanges {
  Products: IProduct[];
  filterprod: IProduct[];
  categories: ICategory[];
  totalprice: number = 0;
  idselected: number = 0;
  @Output() ontotalprice: EventEmitter<number>; // publisher
  @Input() recieceid: number = 0;
  constructor() {
    this.ontotalprice = new EventEmitter<number>();
    this.Products = [
      {
        id: 1,
        title: 'HP',
        price: 1000,
        Stock: 1,
        description: 'HP Laptop',
        category: 2,
        image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
      },
      {
        id: 2,
        title: 'Dell',
        price: 1200,
        Stock: 5,
        description: 'Dell Laptop',
        category: 2,
        image: 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto',
      },
      {
        id: 3,
        title: 'Lenovo',
        price: 1100,
        Stock: 8,
        description: 'Lenovo Laptop',
        category: 1,
        image: 'https://fakeimg.pl/350x200/?text=World&font=lobster',
      },
      {
        id: 4,
        title: 'Asus',
        price: 1300,
        Stock: 15,
        description: 'Asus Laptop',
        category: 7,
        image: 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto',
      },
      {
        id: 5,
        title: 'Acer',
        price: 900,
        Stock: 20,
        description: 'Acer Laptop',
        category: 4,
        image: 'https://fakeimg.pl/250x100/ff0000/',
      },
      {
        id: 6,
        title: 'Apple',
        price: 2000,
        Stock: 3,
        description: 'Apple Laptop',
        category: 6,
        image: 'https://fakeimg.pl/350x200/?text=World&font=lobster',
      },
      {
        id: 7,
        title: 'Samsung',
        price: 1500,
        Stock: 7,
        description: 'Samsung Laptop',
        category: 4,
        image: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 8,
        title: 'Microsoft',
        price: 1700,
        Stock: 4,
        description: 'Microsoft Laptop',
        category: 4,
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
    this.filterprod = this.Products;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filteredproducts();
  }

  Order(count: string, price: number) {
    this.totalprice += Number(count) * price;
    this.ontotalprice.emit(this.totalprice); // fire event == emit 
  }
  onCategoryChange() {}

  over(event: MouseEvent) {
    var target = event.target as HTMLElement;
    target.style.backgroundColor = 'red';
  }
  out(event: MouseEvent) {
    var target = event.target as HTMLElement;
    target.style.backgroundColor = 'white';
  }
  lol(event: KeyboardEvent) {
    var target = event.target as HTMLInputElement;
    var inp = document.getElementsByTagName('input')[0] as HTMLElement;
    if (target.value == '1') {
      target.style.border = '1px solid red';
    } else {
      target.style.border = '1px solid green';
    }
  }

  filteredproducts() {
    if (this.recieceid == 0) {
      this.filterprod = this.Products;
      return;
    }
    this.filterprod = this.Products.filter((p) => p.category == this.recieceid);
  }
}
