import { Injectable } from '@angular/core';
import { ICategory } from '../Model/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories : ICategory[]; 
  constructor() {
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
    getCategories(): ICategory[] {
      return this.categories;}
}
