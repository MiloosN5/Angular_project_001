import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/servers/products.service';
import { ShoppingService } from 'src/app/servers/shopping.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentProduct: Product;
  notEmpty: boolean = false;
  quantityValue: string;

  constructor(
    private _productsService: ProductsService,
    private _shoppingService: ShoppingService,
    private _route: ActivatedRoute,
    private _router: Router,
    //public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.currentProduct = this._productsService.getProductByID(1)[0];
    /* changing the route depending on id of product */
    this.routeChanged(this._route.snapshot.params['id']);
    this._route.params.subscribe(
      (params: Params) => {
        this.routeChanged(params['id']);
      }
    )
  }

  /* get the product depending on its id */
  routeChanged(id: number){
    let newProduct = this._productsService.getProductByID(id);
    if(newProduct){
        this.currentProduct = newProduct[0];
    }
  }  

  /* redirect to the previous product depending on its id */
  previousProduct(id: number) {
    let prevProduct = this._productsService.getProductByID(id);
    this.currentProduct = prevProduct[0];
    this._router.navigate(['/shop/category', this.currentProduct.category, this.currentProduct.id]);
  }

  /* redirect to the next product depending on its id */
  nextProduct(id: number) {
    let nextProduct = this._productsService.getProductByID(id);
    this.currentProduct = nextProduct[0];
    this._router.navigate(['/shop/category', this.currentProduct.category, this.currentProduct.id]);
  }

    /* put this product to the cart */
    buyProduct(product: Product, quantity: string) {
      /* if user enter any value in the input field, allow him to click "add to Cart" button */
      if(+quantity > 0) {
        /* if user is loggedin, then also allow him to successfully add product to the cart */
        let selectedProduct = new Cart(this._shoppingService.cart.length+1, product, +quantity);
        this._shoppingService.cart.push(selectedProduct);
        this._shoppingService.storeProduct(selectedProduct)
        .subscribe({
          next: (response)=>console.log(response),
          error: (error) => console.log(error)
        })
        this._shoppingService.amountOfProducts += +quantity; // increase amount of buyed products depending on their quantity property
        this._shoppingService.cartChange1.emit(this._shoppingService.amountOfProducts); // emit new value for "amountOfProducts"        
      }
    }

}
