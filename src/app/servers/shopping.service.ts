import { EventEmitter, Injectable, Input } from "@angular/core";
import { Cart } from "../models/cart";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ShoppingService {

  /* list of products in the cart */
  cart: Cart[] = [];
  
  /* list of products that will be displayed */
  @Input() displayProducts: Cart[] = [];

  amountOfProducts: number = 0;
  cartChange1: EventEmitter<any> = new EventEmitter();

  subtotalPrice: number = 0;
  cartChange2: EventEmitter<any> = new EventEmitter();

  shippingPrice: any;
  cartChange3: EventEmitter<any> = new EventEmitter();

  totalPrice: number;
  cartChange4: EventEmitter<any> = new EventEmitter();

  constructor(
    private _httpClient: HttpClient,
  ){}


  /* setting headers for the Http requests to the in memory web api (as a "mocking" server - not the real one) */
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  /* get products */
  getProduct(){
    return this._httpClient.get("api/buyedProducts",{
      headers: this.headers
    });
  }

  /* add product */
  storeProduct(product: Cart){
    return this._httpClient.post('api/buyedProducts', product, {
      headers: this.headers
    });
  }

  /* delete product */
  deleteProduct(id: number){
    return this._httpClient.delete('api/buyedProducts/'+id, {
      headers: this.headers
    })
  }

  /* edit product */
  editBook(product :Cart){
    return this._httpClient.put('api/buyedProducts/' + product.id, product, {
      headers: this.headers
    })
  }

  /* empty the whole cart */
  removeAll(){
    this.displayProducts.forEach(oneProduct => {
      this.deleteProduct(oneProduct.id)
      .subscribe({
        next: (response) => {
          console.log(response);
          let index = this.cart.findIndex(function(foundedProduct){return foundedProduct.id == oneProduct.id});
          if(index != -1){
            this.getProduct();
          }
        },
        error: (error) => console.log(error)
      })
    })
  }

}