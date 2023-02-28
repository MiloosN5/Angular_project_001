import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servers/auth.service';
import { ShoppingService } from 'src/app/servers/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  amountOfProducts: number = 0;

  constructor(
    public shop: ShoppingService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.shop.cartChange1.subscribe(
      item => this.amountOfProducts = item
    )
  }


}
