import { Injectable } from '@angular/core';
import { IProduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  Products: IProduct[];

  constructor() {
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
  }

  // here add services

  getProducts(): IProduct[] {
    return this.Products;
  }
  getProduct(id: number): IProduct | undefined {
    return this.Products.find((product) => product.id === id);
  }
  getProductsByCategory(id: number): IProduct[] {
    return this.Products.filter((product) => product.category === id);
  }
  addproduct(item: IProduct): void {
    this.Products.push(item);
  }
  deleteproduct(id: number): void {
    this.Products = this.Products.filter((product) => product.id != id);
  }
  updateproduct(id: number, updatedproduct: IProduct): void {
    const index = this.Products.findIndex((product) => product.id == id);
    if (index != -1) {
      this.Products[index] = updatedproduct;
    }
  }
}
