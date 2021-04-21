import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor( private productService : ProductService) { }

  ngOnInit(): void {
  }
  addNewProduct(form: any){
    console.log(form.value);
    let addProduct = {
      id : '',
      productName: form.value.product_name,
      categoryid : form.value.product_category,
      descriptions: form.value.product_description,
      rating: form.value.product_rating,
      color: form.value.product_color,
      isAvaliable:1,
      productImg: '',
      price: form.value.product_price,
      review: form.value.product_reviews
    }
    console.log(addProduct)
    this.productService.createProduct(addProduct).subscribe(data =>{
      console.log(data)
    });
  }


 

}
