import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
export interface Order {
  total: number;
  tax: number;
  status: string;
  id:number;
  orderItems: {
    name: string,
    quantity: number,
    price: number,
    description: string,
    options: number[],
    id: number
  }[];
}
@Injectable({
  providedIn: 'root'
})
export class OrdersService extends CrudService<number, any> {

  constructor(protected override _http: HttpClient) {
    super(_http, 'Orders')
  }

  getOrders(): Observable<any> {
    return this.findAll()
  }

  getOrder(id: number): Observable<any> {
    return this.findOne(id)
  }
}
