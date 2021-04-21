import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  productId = 0;

  constructor(private activatedRoute :ActivatedRoute,
    private productServie : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId = data.id; //capture the ID which i want deleted product

      this.productServie.deleteProduct(this.productId).subscribe(deleteProduct => {
        console.log("Product has been Delete"); //deleted Data selected id 
      })
    })
  }

}
