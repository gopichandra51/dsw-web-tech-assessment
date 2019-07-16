/**
* @module Products
* @copyright 2019 DSW. All Rights Reserved.
*/

// Core Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom Libraries
// tslint:disable-next-line:max-line-length
import { ProductService } from './product.service';
// tslint:disable-next-line:max-line-length
import { ProductListComponent } from './products-home/product-list/product-list.component';
// tslint:disable-next-line:max-line-length
import { MainProductComponent } from './products-home/main-product/main-product.component';
// tslint:disable-next-line:max-line-length
import { ProductsHomeComponent } from './products-home/products-home.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ],
  declarations: [
    ProductListComponent,
    MainProductComponent,
    ProductsHomeComponent,
    //DashboardComponent
   ],
  providers: [
    ProductService,
   ]
})

export class ProductsModule {
}
