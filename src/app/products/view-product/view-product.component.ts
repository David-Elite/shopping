import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
productID = 0;
productData : Product;
  constructor(private activateRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( data =>{
    this.productID = data.id;

   
    });
     this.productService.viewProduct().subscribe(viewData => {
       this.productData = viewData;
     });
  }

}
