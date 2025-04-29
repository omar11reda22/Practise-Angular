import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ProductwithSErviceComponent } from './productwith-service/productwith-service.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    CategoryComponent,
    ProductwithSErviceComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';
}
