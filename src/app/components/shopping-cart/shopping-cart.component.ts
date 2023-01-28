import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { ShoppingService } from '../../servers/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  thisProduct: Cart;

  subTotalUpdated: number = 0;
  shippingUpdated: any;
  totalPriceUpdated: number;

  constructor(
    public shopp: ShoppingService,
  ) { }

  ngOnInit() {
    /* subscribe for the updated version of variables declared in the service */
    this.shopp.cartChange2.subscribe(
      item => this.subTotalUpdated = item
    )
    this.shopp.cartChange3.subscribe(
      item => this.shippingUpdated = item
    )
    this.shopp.cartChange4.subscribe(
      item => this.totalPriceUpdated = item
    )
    this.getProduct();
  }

  /* calculate the total price of buyed products, plus shipping (depending on the case) and their sum (totalPrice) */
  priceCalculation() {
    this.shopp.subtotalPrice = 0;
    this.shopp.displayProducts.forEach(oneProduct => {
      this.shopp.subtotalPrice += oneProduct.product.price * oneProduct.quantity;
    })
    if(this.shopp.subtotalPrice > 1092) {
      this.shopp.shippingPrice = "FREE";
      this.shopp.totalPrice = this.shopp.subtotalPrice;
    }
    else{
      this.shopp.shippingPrice = 100;
      this.shopp.totalPrice = this.shopp.subtotalPrice + this.shopp.shippingPrice;
    }
    this.shopp.cartChange2.emit(this.shopp.subtotalPrice);
    this.shopp.cartChange3.emit(this.shopp.shippingPrice);
    this.shopp.cartChange4.emit(this.shopp.totalPrice);
  }

  /* display products that are added to the cart */
  getProduct(){
    this.shopp.getProduct()
    .subscribe({
      next: (products) => {
        this.shopp.displayProducts = products as Cart[];
        this.priceCalculation();
      },
      error: (err) => console.log(err)
    })
  }

  /* remove product from the cart if you wish */
  removeIt(product: Cart, quantity: string){
    this.shopp.deleteProduct(product.id)
    .subscribe({
      next: (response) => {
        console.log(response);
        let index = this.shopp.cart.findIndex(function(b){return b.id == product.id});
        if(index != -1){
          this.getProduct();
        }
      },
      error: (error) => console.log(error)
    })
    /* take care of updating prices */
    this.shopp.subtotalPrice -= product.product.price;
    this.shopp.cartChange2.emit(this.shopp.subtotalPrice);
  }

  /* change the amount of product you wish to buy */
  changeQuantity(product: Cart, quantity: string){
    this.thisProduct = product; // a single product (Cart not Cart[])
    /* create new object */
    let editedProduct = {
      id: this.thisProduct.id,
      product: this.thisProduct.product,
      quantity: +quantity
    }
    /* if product exist, find it in the cart and set new values */
    let index = this.shopp.cart.findIndex(function(b){return b.id == editedProduct.id});
    if(index != -1){
      this.shopp.cart[index].product = this.thisProduct.product;
      this.shopp.cart[index].quantity = +quantity;
      this.shopp.editBook(editedProduct)
      .subscribe({
        next: (response) => console.log("Quantity successfully changed of product" + editedProduct.id),
        error: (err) => console.log(err)
      });
    }
    /* update list of products in the cart */
    this.getProduct();
  }

}


