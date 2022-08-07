import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/features/products/models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList!: Product[];
  cartItems: any[] = [];
  status: string = 'init';
  // httpClient!: HttpClient;

  constructor(private productsService: ProductsService) {
    //* Dependency Injection ile Angular otomatik olarak inject eder.
    // this.httpClient = httpClient;
  }

  ngOnInit(): void {
    setTimeout(() => this.getProducts(), 1000);

    //const value: string = 'A';
    // if (value === 'B') console.log('B', value);
    // else if (value === 'A') console.log('A', value);
    // else console.log('else', value);
    // switch (value) {
    //   case 'B':
    //     console.log('B', value);
    //     break;
    //   case 'A':
    //     console.log('A', value);
    //     break;

    //   default:
    //     console.log('default', value);
    //     break;
    // }
  }

  getProducts() {
    this.status = 'loading';
    this.productsService.getList().subscribe(response => {
      this.productList = response;
      setTimeout(() => (this.status = 'loaded'), 1000);
    });
  }

  addToCart(product: Product) {
    let itemToFind = this.cartItems.find(c => c == product.name);
    if (!itemToFind) {
      this.cartItems.push(product.name);
    }
  }
}
