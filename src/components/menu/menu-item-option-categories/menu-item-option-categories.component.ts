import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { CategoryOption, ItemOption } from 'src/entities/category-option';
import { MenuItemsService } from '../menu-items/menu-items.service';

@Component({
  selector: 'app-menu-item-option-categories',
  templateUrl: './menu-item-option-categories.component.html',
  styleUrls: ['./menu-item-option-categories.component.scss']
})
export class MenuItemOptionCategoriesComponent extends CrudService<any, number> implements OnInit {
  categoryOptionList: CategoryOption[] = [];
  menuItem: any;
  quantity: number = 0;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected override _http: HttpClient,


  )
  {
    super(_http, 'MenuItemOptionCategories/GetByItemId?id=');
  }

  ngOnInit(): void {

    this.menuItem = this.data.item;
    this.getCategoryOptionItem(this.menuItem.id);

    console.log("menuItem",this.menuItem)


  }
  onPlus(quantity: number){
   this.quantity = quantity + 1;
  }
  onMinus(quantity){
    if(quantity > 0){
      this.quantity = quantity - 1;
    }
  }

  getCategoryOptionItem(id: number){
    this.findAllById(id).subscribe( data =>{
      this.categoryOptionList = data;
      console.log("this.categoryOptionList  : ", this.categoryOptionList );

    })
  }
  OnSelected(category: CategoryOption ,option: ItemOption){
    console.log("Selected:",category)
    option.isSelected = !option.isSelected;
  }

  CloseDialog(){
    this.dialogRef.close();
  }

}
