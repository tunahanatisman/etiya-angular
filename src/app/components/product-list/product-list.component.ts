import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // productList:any[]=[]
  productList!: any[];

  carItems: any[] = [];

  constructor(private productsService:ProductsService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts()
    }, 2000);

  }
  getProducts() {
    this.productsService.getList().subscribe(response=>{
      this.productList=response

    })
  }

  addToCart(product: Product) {
    let itemToFind = this.carItems.find((c) => c == product.name);
    if (!itemToFind) {
      this.carItems.push(product.name);
    }
  }

}
