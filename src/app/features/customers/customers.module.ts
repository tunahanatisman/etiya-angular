import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, CustomersRoutingModule, ReactiveFormsModule]
})
export class CustomersModule {}
