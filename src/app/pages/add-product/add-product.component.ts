import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  email!:string
  password!:string
  constructor() { }

  ngOnInit(): void {
    this.email = "Tunahan"
   // this.onEmailChange() ts degiştigi zaman da fonksiyon çalışır
  }

  onEmailChange(event:any){
    console.log("Deger degişti :"+ event)

  }

}
