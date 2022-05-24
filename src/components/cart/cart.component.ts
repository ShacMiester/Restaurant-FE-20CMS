
import { Subscription, map } from 'rxjs';
import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends CrudService<any, number> implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav
  currentRoute = '';
  shoppingCart = []
  totalPriceItems: number = 0;
  Subscription: Subscription = new Subscription();
  constructor(
    private CartService: CartService,
    protected override _http: HttpClient,
    private _snackBar: SnackbarService,
  ) {
    super(_http, 'orders/checkout');
  }


  ngOnInit(): void {
    this.Subscription.add(this.getTotal());
    this.Subscription.add(this.getCartItems());
    this.CartService.data.subscribe(
      total => {
        if (total != null)
          this.totalPriceItems = total;
        else
          this.getTotal();
      }
    )
  }

  getCartItems() {
    this.CartService.getCartItems().subscribe(items => {
      this.shoppingCart = items;
    });
  }

  getTotal() {
    this.CartService.getTotalPrice().subscribe(total => {
      this.totalPriceItems = total;
    });

  }
  clearCart() {
    this.CartService.deleteCart()
    this.Subscription.add(this.getCartItems());
    this.Subscription.add(this.getTotal());
    this.sidenav.toggle();
  }
  add(i, op) {
    this.CartService.addToCart(i, op, "add");//
    // this.calculateTotalPrice();
    this.Subscription.add(this.getTotal());

  }
  minus(i, op) {
    this.CartService.addToCart(i, op, "minus");//
    this.Subscription.add(this.getTotal());
    //this.calculateTotalPrice();

  }

  calculateTotalPrice() {
    this.totalPriceItems = 0;
    this.shoppingCart.forEach(e => {
      this.totalPriceItems += e.price * e.quantity;
    })
    return this.totalPriceItems;
  }
  correctionData() {
    const orderItems = { orderItems: [], branchId:localStorage.getItem('Branch') }
    const item = Object.assign({}, this.shoppingCart.map((e): any => {
      orderItems['orderItems'].push({
        "menuItemId": e.id,
        "quantity": e.quantity,
        "options": e.optionIds.map(option => { return option.id })
      })
      return e;
    }
    ));
    return orderItems;
  }
  addOrders() {
    let orders = this.correctionData();
    this.Subscription.add(this.save(orders).subscribe({
      next: (v: any) => {
        this._snackBar.open("Orders Added Succefuly", "Ok")
        window.open(v.url)
        // this.clearCart()//review
      },
      error: () => this._snackBar.open("error has occurred", "Ok"),
      complete: () => { }
    }))
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
