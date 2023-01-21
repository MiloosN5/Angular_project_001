import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/servers/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: string[];

  constructor(
    private _productsService: ProductsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.categories = this._productsService.allCategories;
    this._router.navigate(['/shop/', this.categories[0]]);
  }

}
