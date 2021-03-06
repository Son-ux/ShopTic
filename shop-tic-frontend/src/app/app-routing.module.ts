import { ClientDefaultComponent } from './client/client-default/client-default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/modules/home/home.component';
import { CartsComponent } from './client/modules/carts/carts.component';
import { ProductComponent } from './client/modules/product/product.component';

const routes: Routes = [{
  path: '',
  component: ClientDefaultComponent,
  children: [{
    path: '',
    component: HomeComponent,
  }, {
    path: 'cart',
    component: CartsComponent
  }, {
    path: 'product',
    component: ProductComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
