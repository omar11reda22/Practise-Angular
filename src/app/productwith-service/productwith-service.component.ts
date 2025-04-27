import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { IProduct } from '../Model/iproduct';
import { ICategory } from '../Model/icategory';
import { CategoryService } from '../Services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productwith-service',
  imports: [CommonModule, FormsModule],
  templateUrl: './productwith-service.component.html',
  styleUrl: './productwith-service.component.css',
})
export class ProductwithSErviceComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];
  selectedcat: number = 0;
  filterprod!: IProduct[];
  // inject service to use this
  constructor(
    private productservice: ProductServiceService,
    private categoryservice: CategoryService
  ) {}
  ngOnInit(): void {
    this.products = this.productservice.Products;
    this.categories = this.categoryservice.getCategories();
    this.filterprod = this.products; // u should load it before component building
  }
  onCategoryChange() {
    if (this.selectedcat == 0) {
      this.filterprod = this.products;
    } else {
      this.filterprod = this.productservice.getProductsByCategory(
        Number(this.selectedcat) // convert to number
     //  this.selectedcat
      );
    }
  }
}
