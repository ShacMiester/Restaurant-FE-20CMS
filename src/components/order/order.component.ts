import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Order } from './services/order-status.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent extends CrudService<number, any> implements OnInit {
  order: Order;
  paramsID: number;
  info: any = {
    date: new Date(),
    total: 3.2,
    type: 'Store Pickup',
    location: '',
  };
  statusMessage: string;
  showMatSpinner: boolean = true;
  constructor(
    protected override _http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
    private cartService: CartService
  ) {
    super(_http, 'Orders');
  }

  ngOnInit(): void {
    this.getQueryParams();
  }
  getOrder(id: number) {
    this.findOne(id).subscribe({
      next: (order: any) => {
        if (order) {
          this.order = order;
          this.updateStatusMessage(order.status);
          localStorage.removeItem("cart");
        }
        // this.order.status = 'Pending'
      },
      error: (err) => this.navigateToPageNotFound(),
    });
  }

  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      if (params['OrderID'] != null || params['OrderID'] != undefined) {
        this.getOrder(params.OrderID);
        localStorage.setItem('order', params['OrderID'])
        this.cartService.deleteCart()
      }
      else this.navigateToPageNotFound();
    });
  }

  navigateToPageNotFound() {
    // this.route.navigate(['page-not-found'])
  }
  updateStatusMessage(type: string) {
    switch (type) {
      case 'Pending':
        this.statusMessage = 'Waiting For Approval';
        break;
      case 'InProgress':
        this.statusMessage = 'Your meal is being prepared';
        break;
      case 'OrderReady':
        this.statusMessage = 'Your meal is waiting for you';
        break;
      case 'Delivering':
        this.statusMessage = 'On its way';
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.showMatSpinner = false;
    }, 400);
  }
}
