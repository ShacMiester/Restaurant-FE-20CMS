import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { CartService } from './../../../shared/services/cart.service';
import { MenuItemsService } from './menu-items.service';
import { ModalComponent } from '../modal/modal.component';
import { Component, OnInit, Output, EventEmitter, QueryList, ViewChildren, OnDestroy } from '@angular/core';
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
export class MenuItemsComponent extends CrudService<any, number> implements OnInit, OnDestroy {
  active = 1;
  name: string = '';
  menuCategories = []
  public formFields: any;
  environment = `${environment.store}Uploads/`
  cart: any[] = []
  someItems = [{ name: 'kebab', price: 12 }];
  @ViewChildren("popupContent") components: QueryList<any>;
  Subscription: Subscription = new Subscription();
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
    this.Subscription.add(this.constructItems());


  }
  constructItems() {
    this.findAll().subscribe(data => {
      this.items = data;
    })
  }

  addToCart(item: any) {
    const dialogRef = this.dialog.open(MenuItemOptionCategoriesComponent, {
      width: '50%',
      height: '80vh', data: { item: item, form: this.formFields }
    });
    dialogRef.afterClosed().subscribe(itemObj => {

      if (itemObj) {
        this.CartService.addToCart(itemObj.item, itemObj);
      }
    }
    );
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  goToTarget(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}

