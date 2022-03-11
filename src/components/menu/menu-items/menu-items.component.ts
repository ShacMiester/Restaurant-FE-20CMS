import { HttpClient } from '@angular/common/http';
import { CartService } from './../../../shared/services/cart.service';
import { MenuItemsService } from './menu-items.service';
import { ModalComponent } from '../modal/modal.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/components/admin/services/crud.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent extends CrudService<any, number> implements OnInit {
  animal: string = '';
  name: string = '';
  public formFields: any;
  cart:any[] = []
  someItems = [{ name: 'kebab', price: 12 }]
  constructor(public dialog: MatDialog, public form: MenuItemsService, private CartService: CartService,protected override _http:HttpClient) {
    super(_http, '');
    this.formFields = form.getSpecificItemForm()
  }

  ngOnInit(): void {
  }
  addToCart(item:any){
    this.CartService.addToCart(item)
  }

  getMenuItems(){
    this._http.get('').subscribe(menuItems=>{
      //Comment
    })
  }
  openModal(item: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      // width: '250px',
      data: { item: item, form: this.formFields }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }
}

