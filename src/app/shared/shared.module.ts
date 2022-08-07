import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductsModule } from '../features/products/products.module';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent,HomepageComponent],
  imports: [CommonModule, SharedRoutingModule, ProductsModule],
  exports: [NavbarComponent]
})
export class SharedModule {}
