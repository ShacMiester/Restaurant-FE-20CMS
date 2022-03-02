import { CartService } from './../../../shared/services/cart.service';
import { MenuItemsService } from './menu-items.service';
import { ModalComponent } from '../modal/modal.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  animal: string = '';
  name: string = '';
  public formFields: any;
  cart:any[] = []
  someItems = [{ name: 'kebab', price: 12 }]
  constructor(public dialog: MatDialog, public form: MenuItemsService, private CartService: CartService) {
    this.formFields = form.getSpecificItemForm()
  }

  ngOnInit(): void {
  }
  addToCart(item:any){
    this.CartService.addToCart({name:'kebab'})
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

