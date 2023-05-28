import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product: IProduct = {
    id: 0,
    name: "",
    img: "",
    price: 0,
    description: "",
  }
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      }, error => console.log(error.message))
    })
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe(product => {
      console.log(product);
      this.router.navigate(['admin/product']);
    })
  }
}
