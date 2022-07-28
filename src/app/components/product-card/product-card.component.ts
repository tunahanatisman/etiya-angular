import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Output() onBtnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }

  addToCartEvent(productName: string) {
    this.onBtnClick.emit(productName);
  }
}
