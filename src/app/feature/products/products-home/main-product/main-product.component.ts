import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductModel } from '../../product.model';
@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {

@Input() userSelectedProduct: ProductModel;
@Output() backButtonEvent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public backButtonClicked() {
    this.backButtonEvent.emit();
  }

}
