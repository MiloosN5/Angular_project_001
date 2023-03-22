import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InMemoryLibrary } from '../../servers/in-memory-library';
import { ShoppingService } from '../../servers/shopping.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private _shop: ShoppingService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.min(100000000), Validators.max(999999999)]),
      'address': new FormControl(null, [Validators.required]),
      'comment': new FormControl(null),
      'payment': new FormControl(null, [Validators.required])
    });
    this.signupForm.reset();
  }

  onSubmit() {
    console.log(this.signupForm); // write form in console
    this._shop.cartChange1.emit(this._shop.amountOfProducts = 0); // reset amount of products variable to zero
    this._shop.removeAll(); // empty the cart
    this._router.navigate(['']); // redirect to home page
  }

}
