import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { CartService } from './../../../shared/services/cart.service';
import { MenuItemsService } from './menu-items.service';
import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/components/admin/services/crud.service';
import { MenuItemOptionCategoriesComponent } from '../menu-item-option-categories/menu-item-option-categories.component';
import { LocationComponent } from 'src/components/location/location.component';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent
  extends CrudService<any, number>
  implements OnInit, OnDestroy
{
  active = 1;
  name: string = '';
  menuCategories = [];
  public formFields: any;
  environment = `${environment.store}Uploads/`;
  cart: any[] = [];
  someItems = [{ name: 'kebab', price: 12 }];
  @ViewChildren('popupContent') components: QueryList<any>;
  Subscription: Subscription = new Subscription();
  constructor(
    public dialog: MatDialog,
    public form: MenuItemsService,
    private CartService: CartService,
    protected override _http: HttpClient
  ) {
    super(_http, 'menuCategories/withItems');
    this.formFields = form.getSpecificItemForm();
  }
  items = [];
  branches: any = [];
  selectedBranch = parseInt(localStorage.getItem('Branch'))
  ngOnInit(): void {
    if (
      localStorage.getItem('Branch') == '' ||
      localStorage.getItem('Branch') == null
    )
      this.changeLocation();
    this.Subscription.add(this.constructItems());
    this.getLocations()
  }
  constructItems() {
    this.findAll().subscribe((data) => {
      this.items = data;
    });
  }
  getLocations() {
    this._http.get(environment.storeApi + '/branch').subscribe({
      next: (v) => {
        this.branches = v;
      },
    });
  }
  changeBranch(id: number) {
    this.selectedBranch = id
    localStorage.setItem('Branch',id?.toLocaleString())
  }
  changeLocation() {
    this.dialog.open(LocationComponent, { disableClose: true }).afterClosed().subscribe({next:(location)=>{
      this.selectedBranch = location
    }})
  }
  addToCart(item: any) {
    const dialogRef = this.dialog.open(MenuItemOptionCategoriesComponent, {
      data: { item: item, form: this.formFields },
      maxHeight:'90vh'
    });
    dialogRef.afterClosed().subscribe((itemObj) => {
      if (itemObj) {
        this.CartService.addToCart(itemObj.item, itemObj);
      }
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  goToTarget(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
