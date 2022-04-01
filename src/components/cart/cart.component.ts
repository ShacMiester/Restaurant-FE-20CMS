import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav
  currentRoute = ''
  constructor(private CartService: CartService) { }
  shoppingCart = []
  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems() {
    this.CartService.getCartItems().subscribe(items => { this.shoppingCart = items })
  }

  clearCart() {
    this.CartService.deleteCart()
    this.getCartItems()
    this.sidenav.toggle()
  }
  add(i) {
    this.CartService.addToCart(i)
  }
}
