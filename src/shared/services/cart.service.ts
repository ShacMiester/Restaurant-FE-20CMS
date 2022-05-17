import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  data: Observable<any> = this.dataSource.asObservable();

  cartItems: any = [];
  total_price: number = 0;
  constructor() { }

  addToCart(item: any, obj: any, operation?:string) { // obj :  is the complete object
    console.log("From service : ",obj)
    const menuItem = this.cartItems.findIndex(x => x.id === item.id)
    if (menuItem == -1){
    console.log("service: obj. : ", { id: item.id, name: item.name, quantity: 1, price: item.price, optionIds: obj.optionIds})
      this.cartItems.push({ id: item.id, name: item.name, quantity: 1, price: item.price, optionIds: obj.optionIds})
     }
     else if(operation =="minus"){
      this.cartItems[menuItem].quantity -= 1;

    }
    else if(operation =="add") {
      console.log("iddd", menuItem)
      this.cartItems[menuItem].quantity += 1;
      //this.cartItems.push({ id: item.id, name: item.name, quantity: 1, price: item.price, optionIds: obj.optionIds})

    }
      else {
      //this.cartItems[menuItem].quantity += 1;
      this.cartItems.push({ id: item.id, name: item.name, quantity: 1, price: item.price, optionIds: obj.optionIds})

    }
    this.calculateTotalPrice();
    console.log("From service  this.total_price: ", this.total_price)
    localStorage.setItem('total_price', JSON.stringify( this.total_price));
    this.sendData(this.total_price);
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
  }

  getCartItems(): Observable<any> {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    return of(this.cartItems)
  }

  getTotalPrice(): Observable<any>{
    this.total_price = JSON.parse(localStorage.getItem('total_price') || '0')
    return of(this.total_price)
  }

  deleteCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('total_price', JSON.stringify(0));
  }

  calculateTotalPrice(){
    this.total_price = 0;
   let totalOptions = 0;
  this.cartItems.forEach(
    el => {
      totalOptions = 0;

      el.optionIds.forEach( e =>{
      totalOptions += e.addtionalPrice;
    });
    console.log("totalOptions",totalOptions, "el.id:" ,el.id)
    console.log(" this.total_price",  this.total_price)

     this.total_price +=  el.price * el.quantity + totalOptions *el.quantity;

    }
  );
  }
  sendData(data: any) {
    this.dataSource.next(data);
  }
}
