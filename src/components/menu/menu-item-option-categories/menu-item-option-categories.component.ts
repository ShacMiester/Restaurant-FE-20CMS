import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { CategoryOption, ItemOption } from 'src/entities/category-option';
import { SnackbarService } from 'src/shared/services/snackbar.service';
@Component({
  selector: 'app-menu-item-option-categories',
  templateUrl: './menu-item-option-categories.component.html',
  styleUrls: ['./menu-item-option-categories.component.scss'],
})
export class MenuItemOptionCategoriesComponent
  extends CrudService<any, number>
  implements OnInit
{
  categoryOptionList: CategoryOption[] = [];
  menuItem: any;
  quantity: number = 1;
  SelectedOptios: any[] = [];
  OnSelectClass: string;
  isDisabledButton: boolean = true;
  environment = environment.store + 'uploads/';
  hideOptions: boolean = false;
  price: number = 0;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected override _http: HttpClient,
    private _snackBar: SnackbarService
  ) {
    super(_http, 'MenuItemOptionCategories/GetByItemId?id=');
  }

  ngOnInit(): void {
    this.menuItem = this.data.item;
    this.price = this.menuItem.price;
    this.getCategoryOptionItem(this.menuItem.id);
  }
  onPlus(quantity: number) {
    this.quantity = quantity + 1;
    this.calculatePrice(this.SelectedOptios);
  }
  onMinus(quantity) {
    if (quantity > 1) {
      this.quantity = quantity - 1;
    }
    this.calculatePrice(this.SelectedOptios)
  }

  getCategoryOptionItem(id: number) {
    this.findAllById(id).subscribe({
      next: (data) => {
        if (data?.length) {
          this.categoryOptionList = data;
          this.initialCategoryOptionLength(this.categoryOptionList);
        } else {
          this.isDisabledButton = false;
          this.hideOptions = true;
        }
      },
    });
  }
  initialCategoryOptionLength(categoryOptionList: CategoryOption[]) {
    categoryOptionList.forEach((e) => {
      e.length = 0;
    });
    return categoryOptionList;
  }
  OnSelected(category: CategoryOption, option: ItemOption, i: number) {

    if (
      this.categoryOptionList[i].length >= category.max &&
      option.isSelected != true
    ) {
      this._snackBar.open(
        `Please pay attention you shouldn't select more than ${category.length} options`,
        'Ok'
      ); // no need
      option.isSelected = false;
    } else {
      option.isSelected = !option.isSelected;
      if (option.isSelected == true) {
        this.SelectedOptios.push({
          id: option.id,
          addtionalPrice: option.addtionalPrice,
        });
        this.categoryOptionList[i].length = category.length + 1;

        if (this.categoryOptionList[i].length >= category.min) {
          this.isDisabledButton = false;
        } else {
          this.isDisabledButton = true;
        }
      } else {
        this.SelectedOptios = this.SelectedOptios.filter(
          (e) => e.id != option.id
        );
        this.categoryOptionList[i].length = category.length - 1;
        if (this.categoryOptionList[i].length >= category.min) {
          this.isDisabledButton = false;
        } else {
          this.isDisabledButton = true;
        }
      }
     this.calculatePrice(this.SelectedOptios);
    }
  }

  calculatePrice(option:any[]){
   let total_option_price = 0;
   let total = 0;
   this.price = 0;
    option.forEach(e =>{
      total_option_price += e.addtionalPrice;
   })
      total = (this.menuItem.price  + total_option_price) * this.quantity;
      this.price = parseFloat(total.toFixed(2))

  }

  AddToCart() {
    let item = {
      optionIds: this.SelectedOptios,
      quantity: this.quantity,
      item: this.menuItem,
    };
    this.dialogRef.close(item);
  }
  CloseDialog() {
    this.dialogRef.close();
  }
}
