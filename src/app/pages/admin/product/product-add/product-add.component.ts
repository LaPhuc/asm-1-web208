import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product: IProduct = {
    id: 0,
    name: "",
    img: "",
    price: 0,
    description: "",
  }
  constructor(private productService: ProductService, private router: Router) {

  }
  onHandleSubmit() {
    this.productService.addProduct(this.product).subscribe(product => {
      console.log(product);
      this.router.navigate(['admin/product']);
    })
  }
}
