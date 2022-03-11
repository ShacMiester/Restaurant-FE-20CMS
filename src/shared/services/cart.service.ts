import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems!: any
  constructor() { }

  addToCart(item: any) {
    this.cartItems.push(item)
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
  }

  getCartItems(): Observable<any> {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    return of(this.cartItems)
  }

  deleteCart() {
    localStorage.setItem('cart', JSON.stringify([]))
  }
}
