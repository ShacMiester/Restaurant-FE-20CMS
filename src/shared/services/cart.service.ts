import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private itemDataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  data: Observable<any> = this.dataSource.asObservable();
  items: Observable<any> = this.itemDataSource.asObservable();
  id:number;
  cartItems: any = [];
  total_price: number = 0;
  constructor() { }

  addToCart(item: any, obj: any, operation?: string) { // obj :  is the complete object
    let menuItem ;
    let noOption: boolean = false;

    if(obj == undefined){
      if(item.optionIds == undefined || item.optionIds == null || item.optionIds.length == 0){

        menuItem =  this.cartItems.findIndex(x => x.id === item.id);
        noOption = true;
        if (operation == "minus"  ) {

          this.cartItems[menuItem].quantity -= 1;

        }
        else if(operation =="add"  ) {
          this.cartItems[menuItem].quantity += 1;
        }
      }
      else{
        menuItem = this.cartItems.findIndex(x => JSON.stringify(x.optionIds) === JSON.stringify(item.optionIds));
       if (operation == "minus"  ) {

          this.cartItems[menuItem].quantity -= 1;

        }
        else if(operation =="add"  ) {
          this.cartItems[menuItem].quantity += 1;
        }
      }


    }
    else{
      if(item.itemOptionCategories == undefined || !item.itemOptionCategories.length ){

        menuItem =  this.cartItems.findIndex(x => x.id === item.id);
        noOption = true;

      }
      else{
        menuItem = this.cartItems.findIndex(x => JSON.stringify(x.optionIds) === JSON.stringify(obj.optionIds))
        noOption = false;
      }

       if((operation =="add") || (menuItem !== -1 && this.cartItems[menuItem].quantity >= 1) ){
        this.cartItems[menuItem].quantity +=  obj.quantity;
      }
      else {
        this.cartItems.push({ id: item.id, name: item.name, quantity: obj.quantity, price: item.price, optionIds: obj.optionIds, imgItem: item.imageURL })
      }
    }

    this.calculateTotalPrice();
    localStorage.setItem('total_price', JSON.stringify( this.total_price));
    this.sendItem(this.cartItems);
    this.sendData(parseFloat(this.total_price.toFixed(2)) );
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
  }
   checkArrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
  getCartItems(): Observable<any> {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    return of(this.cartItems)
  }

  getTotalPrice(): Observable<any> {
    this.total_price = JSON.parse(localStorage.getItem('total_price') || '0')
    return of(this.total_price)
  }

  deleteCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('total_price', JSON.stringify(0));
  }

  calculateTotalPrice() {
    this.total_price = 0;
    let totalOptions = 0;
    let temp = 0;
    this.cartItems.forEach(
      el => {
        totalOptions = 0;
        temp = 0;
      el.optionIds.forEach( e =>{
      totalOptions += e.addtionalPrice *el.quantity;
    });
    this.total_price +=  el.price * el.quantity + totalOptions ;
    temp =  el.price * el.quantity + totalOptions;
    el.totalItem =  parseFloat(temp.toFixed(2))

      }
    );
  }
  sendData(data: any) {
    this.dataSource.next(data);
  }
  sendItem(data:any){
    this.itemDataSource.next(data)
  }
}
