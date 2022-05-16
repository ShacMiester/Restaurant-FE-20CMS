import { HttpClient } from '@angular/common/http';
import { CartService } from './../../../shared/services/cart.service';
import { MenuItemsService } from './menu-items.service';
import { ModalComponent } from '../modal/modal.component';
import { Component, OnInit, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Router } from '@angular/router';
import { MenuItemOptionCategoriesComponent } from '../menu-item-option-categories/menu-item-option-categories.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent extends CrudService<any, number> implements OnInit {
  active = 1;
  name: string = '';
  menuCategories = []
  public formFields: any;
  cart: any[] = []
  someItems = [{ name: 'kebab', price: 12 }];
  @ViewChildren("popupContent") components: QueryList<any>;
  constructor(
    public dialog: MatDialog,
    public form: MenuItemsService,
    private CartService: CartService,
    protected override _http: HttpClient,
       ) {
    super(_http, 'menuCategories/withItems');
    this.formFields = form.getSpecificItemForm()
  }
  items = []
  ngOnInit(): void {


    this.findAll().subscribe(data => {
      this.items = data;
      console.log(data)
    })
  }
  getCategories() {
    this._http.get('')
  }

  addToCart(item: any) {
     const dialogRef = this.dialog.open(MenuItemOptionCategoriesComponent, {
     width: '50%',
     height: '500px',
      data: { item: item, form: this.formFields }
     });
     dialogRef.afterClosed().subscribe(itemObj => {

      if(itemObj){
     this.CartService.addToCart(itemObj.item, itemObj);
    }

      console.log("test itemObj", itemObj)

    }
     );
  }

  getMenuItems() {
    this._http.get('').subscribe(menuItems => {
    })
  }
  openModal(item: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { item: item, form: this.formFields }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
goToTarget(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
}
}

