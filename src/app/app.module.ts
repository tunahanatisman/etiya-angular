import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './features/products/pages/add-product/add-product.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './features/customers/customers.module';
import { HomepageComponent } from './shared/pages/homepage/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductsModule } from './features/products/products.module';
import { RegisterComponent } from './features/customers/pages/register/register.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    ProductsModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
