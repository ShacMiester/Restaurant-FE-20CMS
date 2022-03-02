import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = []
  constructor() { }

  addToCart(item: any) {
    this.cartItems.push({ name: 'kebab' })
    this.getCartItems().subscribe(items => { localStorage.setItem('cart', JSON.stringify(items)) })
  }

  getCartItems(): Observable<any> {
    return of(this.cartItems)
  }
}
