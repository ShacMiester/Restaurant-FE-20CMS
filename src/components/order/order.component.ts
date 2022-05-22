import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Order } from './services/order-status.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent extends CrudService<number, any> implements OnInit {

  order: Order
  paramsID: number
  info: any = { date: new Date(), total: 3.20, type: 'Store Pickup', location: '' }
  statusMessage: string;
  constructor(protected override _http: HttpClient, private router: ActivatedRoute, private route: Router) {
    super(_http, 'Orders');

  }
  x = 25


  ngOnInit(): void {
    this.getQueryParams();
    // while (true) {
    //   this.x = this.x + 1
    // }\
    for (let index = 0; index < 1000; index++) {
      setTimeout(() => {
        this.x = 2* index

      }, 1400);

    }
  }
  getOrder(id: number) {

    this.findOne(id).subscribe({
      next: (order: any) => {
        this.order = order
        order.status = 'Accept'
        this.updateStatusMessage('Accept')
        // this.order.status = 'Pending'
      }, error: (err) => this.navigateToPageNotFound()
    })
  }

  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      console.log(params)
      if (params['OrderID'] != null || params['OrderID'] != undefined)
        this.getOrder(params.OrderID)
      else
        this.navigateToPageNotFound();
    })
  }

  navigateToPageNotFound() {
    // this.route.navigate(['page-not-found'])
  }
  updateStatusMessage(type: string) {
    console.log(type)
    switch (type) {
      case 'Pending':
        this.statusMessage = 'Waiting For Approval'
        break;
      case 'Accept':
        this.statusMessage = 'Your meal is being prepared'
        break;
      case 'Ready':
        this.statusMessage = 'Your meal is waiting for you'
        break;
      case 'Delivering':
        this.statusMessage = 'On its way'
        break;
      default:
        break;
    }
  }


}
