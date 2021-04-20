import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OdersModule } from './oders/oders.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {ProductsModule} from './products/products.module'

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OdersModule,
    AppRoutingModule,
    RouterModule,
    ProductsModule,
    HttpClientModule,
    SiteLayoutModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
