import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/products/product.service';
import { Category } from './category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
categoryList: Category | any ;
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getCatgory().subscribe(data=>{
      this.categoryList = data;
    })

  }

}
