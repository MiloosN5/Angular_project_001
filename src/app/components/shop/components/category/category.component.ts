import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/servers/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedProducts: Product[] = [];

  constructor(
    private _proizvodiService: ProductsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeChanged(this._route.snapshot.params['category']);
    this._route.params.subscribe(
      (params: Params) => {
        this.routeChanged(params['category']);
      }
    )
  }

  routeChanged(category: string){
    let productsByCategory = this._proizvodiService.getProductsByCategory(category);
    this.selectedProducts = [];
    if(productsByCategory){
      productsByCategory.forEach((product)=>{
        this.selectedProducts.push(product);
      })
    }
  }

}
