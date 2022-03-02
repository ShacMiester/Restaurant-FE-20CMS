import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  currentRoute = ''
  constructor(private CartService: CartService) { }
  shoppingCart = []
  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems(){
    this.CartService.getCartItems().subscribe(items => { this.shoppingCart = items })
  }
}
