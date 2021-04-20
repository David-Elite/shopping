import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/site-layout/sidebar/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {
searchCategory : Category | any ;
productList : Product | any;

  constructor(private route : ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
  
    
        
    this.route.queryParams.subscribe((data : any )=>{
      this.searchCategory = data.id;
      
       this.productService.serachCategoryProduct(this.searchCategory).subscribe((categoryData : any) => {
         this.productList = categoryData;

       })
    });
   
  }

}
