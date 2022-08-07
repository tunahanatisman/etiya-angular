import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: 'homepage', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
