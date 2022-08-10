import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { LoginGuard } from 'src/app/core/auth/guards/login-guard/login-guard.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
