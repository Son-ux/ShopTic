import { ProductService } from '../../../service/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(private product: ProductService) {
    this.product.getProductById(1).subscribe(data=>{
      console.warn(data);
    });
  }

  ngOnInit(): void {
  }

  images = [
    {path: 'PAhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrLAZZRhW85ny1UWBbuyo4_ATKJgx7dHK6Q&usqp=CAUTH_TO_IMAGE'}
  ]

}
