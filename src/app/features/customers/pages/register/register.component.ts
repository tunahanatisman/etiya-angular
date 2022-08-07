import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Customer } from 'src/app/features/customers/models/customer';
import { CustomersService } from '../../services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; // state

  // companyName = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder, private customerService: CustomersService) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      companyName: [
        '', // default değer
        [Validators.required, Validators.minLength(2)] // doğrulama
      ],
      contactName: ['', Validators.required],
      contactTitle: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      customerKey: ['', Validators.required]
    });
    // new FormGroup({
    //   companyName: this.companyName,
    // });
  }

  register(): void {
    if (this.registerForm.invalid) {
      // geçersiz
      console.warn('Gerekli alanları doldurunuz.');
      return;
    }

    const customer: Customer = {
      ...this.registerForm.value,
      city: this.registerForm.value.city.toUpperCase()
    };

    this.customerService.add(customer).subscribe(response => {
      console.info(response);
    });
  }
}
