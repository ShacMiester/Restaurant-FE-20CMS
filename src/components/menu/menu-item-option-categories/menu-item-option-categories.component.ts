import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { MenuItemsService } from '../menu-items/menu-items.service';

@Component({
  selector: 'app-menu-item-option-categories',
  templateUrl: './menu-item-option-categories.component.html',
  styleUrls: ['./menu-item-option-categories.component.scss']
})
export class MenuItemOptionCategoriesComponent extends CrudService<any, number> implements OnInit {
  id:number;
  data$: any
  menu: any;
  menuItem: any;
  formField$: any;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected override _http: HttpClient,
    private router: ActivatedRoute,
    public form: MenuItemsService,


  ) {
    super(_http, 'menuCategories/withItems');

  }

  ngOnInit(): void {
    this.getOptionsForm();
    this.menuItem = this.data.item;
    // this.data.item.subscribe((a: any) => { this.menu = a;
    // console.log("fix",this.menu) })
    console.log(this.data)
    console.log("menuItem",this.menuItem)
    this.router.params.subscribe(params => this.id = params['id']);
    console.log("id",this.id)

  }
  getOptionsForm() {
    this.form.getSpecificItemForm().subscribe({
      next: (v) => {
        this.formField$ = v
      }
    })
  }


}
