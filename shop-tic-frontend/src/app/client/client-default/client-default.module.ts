import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from '../modules/carts/carts.component';
import { DashboardComponent } from 'src/app/server/modules/dashboard/dashboard.component';
import { HeaderComponent } from '../share/components/header/header.component';
import { SidebarComponent } from '../share/components/sidebar/sidebar.component';
import { ClientDefaultComponent } from './client-default.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from '../modules/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from '../modules/product/product.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    CartsComponent,
    SidebarComponent,
    ClientDefaultComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    IvyCarouselModule,
    HttpClientModule
  ]
})
export class ClientDefaultModule { }