import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { RouterModule  } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    ViewProductByCategoryComponent,
    ViewProductByDateComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
