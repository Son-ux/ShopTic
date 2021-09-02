import { Product } from './../../../models/Product';
import { ProductService } from '../../../service/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(1)
    .subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }

}
