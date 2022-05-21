import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/components/admin/entities/orders';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent extends CrudService<any, number> implements OnInit {
  @Input() order: Order;
  @Input() acceptedOrdedrList: Order [] = [];
  @Output() UpdateStatus = new EventEmitter<any>();

  constructor(
    protected _http: HttpClient,
    private _snackbarService: SnackbarService
  ) {
    super(_http, 'Orders/ChangeStatus');
  }

  ngOnInit(): void {
  }
  changeStatusToAccepted(order:any){
     this.save({id:order.id,status: "Accept"}).subscribe(
      { next: () => this._snackbarService.open('Order Updated ', "ok"), error: () =>  this._snackbarService.open('An has occurred ', "ok"),
      complete:() =>{this.acceptedOrdedrList = this.acceptedOrdedrList.filter(element =>
        element.id !== order.id
        );
        console.log("this.acceptedOrdedrList",this.acceptedOrdedrList)
        this.UpdateStatus.emit({ id:order.id,status: "Accept" })
      }
    });
  }
  changeStatusToReady(order:any){
    this.save({id:order.id,status: "Ready"}).subscribe(
     { next: () => this._snackbarService.open('Order Updated ', "ok"), error: () =>  this._snackbarService.open('An error has occurred ', "ok"),
     complete:() =>{
      this.UpdateStatus.emit({ id:order.id,status: "Ready" })
     }
   });
 }

 changeStatusToPickup(order:any){
  this.save({id:order.id,status: "Pickup"}).subscribe(
   { next: () => this._snackbarService.open('Order Updated ', "ok"), error: () =>  this._snackbarService.open('An error has occurred ', "ok"),
   complete:() =>{
    this.UpdateStatus.emit({ id:order.id,status: "Pickup" })
   }
 });
}
}
