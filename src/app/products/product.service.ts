import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/sidebar/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // searchCatergoryProduct(searchCategory: any): Observable<void> {
  //   const baseUrl= "http://localhost:3000/products?category"
  //   throw new Error('Method not implemented.');
  // }

  constructor(private httpCLient:HttpClient) { }
  createProduct(productBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpCLient.post<Product>(baseUrl, productBody)
  }
  viewProduct(categoryid : any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+categoryid;
    return this.httpCLient.get<Product>(baseUrl);
  }
  viewProducts():Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpCLient.get<Product>(baseUrl);
  }
  updateProduct(productId: any ,productBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productId;
    return this.httpCLient.put<Product>(baseUrl, productBody);
  }
  deleteProduct(productId: any ):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productId;
    return this.httpCLient.delete<Product>(baseUrl);
  }
  serachCategoryProduct(categoryId: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product?category=" +categoryId;
    return this.httpCLient.get<Product>(baseUrl);
  }
  serachDateProduct(dateParam: any ):Observable<Product>{
    const baseUrl="http://localhost:3000/product?date="+dateParam;
    return this.httpCLient.get<Product>(baseUrl);
  }
  getCatgory(){
    const categoryUrl="http://localhost:3000/categories"
    return this.httpCLient.get<Category>(categoryUrl)
  }
}