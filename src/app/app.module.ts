/* essential for app */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* for Forms */
import { FormsModule } from '@angular/forms';

/* Module for Angular Material */
import { MaterialModule } from './material.module';


/* for Routers */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShopComponent } from './components/shop/shop.component';
import { CategoryComponent } from './components/shop/components/category/category.component';
import { ProductComponent } from './components/shop/components/category/components/product/product.component';

/* Services */
import { ProductsService } from './servers/products.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    ShopComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
