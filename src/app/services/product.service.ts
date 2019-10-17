import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serviceUrl = 'https://cors-anywhere.herokuapp.com/api-products-murmu.herokuapp.com/products';

  constructor(private httpClient: HttpClient) { }


  getProducts() {
    return this.httpClient.get(this.serviceUrl);
  }
}
