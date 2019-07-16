import { Component, OnInit , EventEmitter , Output} from '@angular/core';
// tslint:disable-next-line:max-line-length
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../product.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public productsList: ProductModel[];
@Output() selectProductEvent: EventEmitter<string> = new EventEmitter();
  constructor(
    private _productService: ProductService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.productsList = [];
    this.getProductDeatails();
  }

  /**
   * Will get the searched product details
   */
  public getProductDeatails() {
    const payload = {
      searchedQuery : 'shoes',  // make it dynamic
    };
    this._productService.getSearchedProductDetails(payload)
    .subscribe((data: ProductModel[]) => {
      data.forEach(each => {
      const product = new ProductModel(each);
      this.productsList.push(product);
      });
    });
  }

  public showSelectedProduct(product) {
    this.selectProductEvent.emit(product);
 //   this.router.navigate(['/products/' + product.id]);

  }

}
