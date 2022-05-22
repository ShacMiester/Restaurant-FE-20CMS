import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/components/admin/entities/orders';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-kitchen-orders',
  templateUrl: './kitchen-orders.component.html',
  styleUrls: ['./kitchen-orders.component.scss']
})
export class KitchenOrdersComponent extends CrudService<any, number> implements OnInit {
  allOrderList: Order[] = [];
  pendingOrderList: Order[] = [];
  inProgressOrderList: Order[] = [];
  readyOrderList: Order[] = [];
  pickUpOrderList: Order[] = [];

  constructor(
    protected _http: HttpClient,
    private _snackbarService: SnackbarService
    )
   {
     super(_http, 'orders');
   }

  ngOnInit(): void {
    this.getAllOredrs()
  }
  getAllOredrs(){
    this.findAll().subscribe(
    {
      next: (data) => {
        this.allOrderList = data;
        this.filterOrders(this.allOrderList);
      },
      error: (err) => this._snackbarService.open('An error has occurred', 'ok'),

    })
  }
  getPendingOrders(){
   this.pendingOrderList = this.allOrderList.filter(order =>
      order.status == 'Pending'
   );
    console.log("this.pendingOrderList", this.pendingOrderList)
  }
  getInProgressOrders(){
    this.inProgressOrderList = this.allOrderList.filter(order =>
       order.status == "Accept"
     );
   }
   getReadyOrders(list: any[]){
    this.readyOrderList = list.filter(order =>
       order.status == "Ready"
     );
   }
   getPickUpOrders(){
    this.pickUpOrderList = this.allOrderList.filter(order =>
       order.status == "Pickup"
     );
   }
   filterOrders(list: any[]){
    this.getPendingOrders();
    this.getInProgressOrders();
    this.getReadyOrders(list);
    this.getPickUpOrders();
   }

   changeStatus(event){
     let order = this.searchForItem(this.allOrderList, event.id);
    switch (event.status) {
      case 'Accept':
        this.pendingOrderList = this.deleteItemFromList(this.pendingOrderList, event.id);
       // this.inProgressOrderList.splice(0,0, order);
       this.getInProgressOrders();
        break;
      case 'Ready':
        this.inProgressOrderList = this.deleteItemFromList(this.inProgressOrderList, event.id);
      //  this.readyOrderList.splice(0,0, order);
      this.getReadyOrders(this.allOrderList);
      console.log("ready",       this.readyOrderList
      )
        console.log("From Ready")

        break;
        case 'Pickup':
          this.readyOrderList = this.deleteItemFromList(this.inProgressOrderList, event.id);
        //  this.pickUpOrderList.splice(0,0, order); // waiting for edit response from backend
          this.getPickUpOrders();
          console.log("From Pickup")
          break;

       default:
        break;
    }
 }

 searchForItem(list: any[], id ){
  let item = list.find(el => el.id == id );
  return item;
 }

 deleteItemFromList(list: any [], id){
  let newList = list.filter(el => el.id !== id);
  return newList;
 }
}
