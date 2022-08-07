import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  email!: string;
  constructor() {}

  ngOnInit(): void {}

  changeEmail() {
    this.email = 'blabla';
  }
  onEmailChange(event: any) {
    console.log(event);
  }
}
