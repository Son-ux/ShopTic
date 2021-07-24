import { product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080/api/v1/client/products"

  constructor(private http:HttpClient) { }

  getProductById(productId: number){
    let url = this.baseUrl + productId;
    return this.http.get<product>(url);
  }
}
