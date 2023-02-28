import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CategoryComponent } from "./components/shop/components/category/category.component";
import { ProductComponent } from "./components/shop/components/category/components/product/product.component";
import { ShopComponent } from "./components/shop/shop.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthGuard } from "./servers/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent,
    children: [
      { path: ':category', component: CategoryComponent}
    ]
  }, 
  {path: 'shop/category/:category/:id', component: ProductComponent},
  {path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}, 
  {path: 'signup', component: SignupComponent}, 
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: "/not-found"},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }