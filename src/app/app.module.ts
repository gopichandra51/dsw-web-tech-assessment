import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { ProductsHomeComponent } from '../../src/app/feature/products/products-home/products-home.component';
// tslint:disable-next-line:max-line-length
import { ProductService } from '../../src/app/feature/products/product.service';
// tslint:disable-next-line:max-line-length
import { ProductListComponent } from '../../src/app/feature/products/products-home/product-list/product-list.component';
// tslint:disable-next-line:max-line-length
import { MainProductComponent } from '../../src/app/feature/products/products-home/main-product/main-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductsHomeComponent,
    ProductListComponent,
    MainProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductService],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
