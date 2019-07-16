import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  public showProductPage = false;
  public userSelectedProduct: ProductModel;
  constructor() { }

  ngOnInit() {
  }

  public selectProductEvent(product) {
  this.showProductPage = true;
  this.userSelectedProduct = product;
  }

  backButtonClicked() {
    this.showProductPage = false;
  }
}
