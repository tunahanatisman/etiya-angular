import { AddProductComponent } from './pages/add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SaleDirective } from './directives/sale.directive';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    AddProductComponent,
    SaleDirective,
    KdvPipe
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, CoreModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
