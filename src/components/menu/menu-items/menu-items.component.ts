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
  name: string = '';
  menuCategories = []
  public formFields: any;
  cart:any[] = []
  someItems = [{ name: 'kebab', price: 12 }]
  constructor(public dialog: MatDialog, public form: MenuItemsService, private CartService: CartService,protected override _http:HttpClient) {
    super(_http, 'menuCategories/withItems');
    this.formFields = form.getSpecificItemForm()
  }
items = []
  ngOnInit(): void {
    // this.getCategories();
    this.findAll().subscribe(data=>{
      this.items =data
    })
  }
  getCategories(){
    this._http.get('')
  }
  addToCart(item:any){
    // this.CartService.addToCart(item)
    const dialogRef = this.dialog.open(ModalComponent, {
      // width: '250px',
      data: { item: item, form: this.formFields }
    });
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
    });
  }
}

