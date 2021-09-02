import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080/api/v1/client/products"

  constructor(private http:HttpClient) { }

  getProductById(productId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}` + "/getById/" + productId);
  }
}
