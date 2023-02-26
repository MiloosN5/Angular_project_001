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
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

/* Services */
import { ProductsService } from './servers/products.service';
import { ShoppingService } from './servers/shopping.service';

/* In Memory Web api mocking server */
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLibrary } from './servers/in-memory-library';




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
    ProductComponent,
    ShoppingCartComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryLibrary, {dataEncapsulation: false}
    ),
  ],
  providers: [
    ProductsService,
    ShoppingService,
    InMemoryLibrary
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
