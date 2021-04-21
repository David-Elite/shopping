import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
productId = 0;
  productDetails: import("d:/shopping/shopping/src/app/products/product").Product;
  constructor( private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
        console.log(this.productDetails);
      });
    });
  }
  updateProduct(form: any) {
    const updateProduct = {
     id : form.value.id,
     productName: form.value.product_name,
     categoryid : form.value.product_category,
     descriptions: form.value.product_description,
     rating: form.value.product_rating,
     color: form.value.product_color,
     isAvailable:1,
     productImg: '',
     price: form.value.product_price,
     review: form.value.product_reviews
   }
   console.log(form);
   this.productService.updateProduct(this.productId, updateProduct ).subscribe(data =>{
     console.log(data);
   })
 }

}
