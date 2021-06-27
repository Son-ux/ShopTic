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

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    CartsComponent,
    SidebarComponent,
    ClientDefaultComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ClientDefaultModule { }