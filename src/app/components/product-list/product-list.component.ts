import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList!: Product[];

  cartItems: any[] = [];
  // httpClient!: HttpClient;

  constructor(private httpClient: HttpClient) {
    // this.httpClient = httpClient;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    //* <> Generic
    this.httpClient.get<Product[]>('http://localhost:3000/products').subscribe(response => {
      // [
      //   {},
      //   {}
      // ]
      this.productList = response;
      console.log(this.productList);
    });
  }

  addToCart(productName: string) {
    let itemToFind = this.cartItems.find(c => c == productName);
    if (!itemToFind) {
      this.cartItems.push(productName);
    }
  }
}
