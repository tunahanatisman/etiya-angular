import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [{ path: 'register', component: RegisterComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
