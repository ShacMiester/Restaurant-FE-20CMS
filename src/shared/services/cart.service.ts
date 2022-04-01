import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any = []
  constructor() { }

  addToCart(item: any) {
    console.log(item)
    const menuItem = this.cartItems.findIndex(x => x.id === item.id)
    if (menuItem == -1)
      this.cartItems.push({ id: item.id, name: item.name, quantity: 1, price:item.price })
    else
      this.cartItems[menuItem].quantity += 1;
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
