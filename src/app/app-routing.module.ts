import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CategoryComponent } from "./components/shop/components/category/category.component";
import { ShopComponent } from "./components/shop/shop.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent,
    children: [
      { path: ':category', component: CategoryComponent}
    ]
  }, 
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: "/not-found"},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }