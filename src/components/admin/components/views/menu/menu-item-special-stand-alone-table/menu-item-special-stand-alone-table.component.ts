import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { MenuStandAloneService } from '../menu-stand-alone-form/menu-stand-alone.service';

@Component({
  selector: 'app-menu-item-special-stand-alone-table',
  templateUrl: './menu-item-special-stand-alone-table.component.html',
  styleUrls: ['./menu-item-special-stand-alone-table.component.scss']
})
export class MenuItemSpecialStandAloneTableComponent extends CrudService<any, number> implements OnInit {

  form$: any
  formValues: any
  paramID: number = 0
  type: string = 'add' || 'edit'
  constructor(
    protected override _http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
    private menuCategoriesService: MenuStandAloneService,
    private _snackBar: SnackbarService
  ) {
    super(_http, 'menuItems');
  }

  ngOnInit(): void {
    this.getMenuItems();
    this.getQueryParams();
  }

  getMenuItems() {
    this.menuCategoriesService.getStandAloneMenuForm().subscribe(items => {
      this.form$ = items
    })
  }

  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      if (params.id && params.type == 'edit') {
        this.type = 'edit'
        this.paramID = params.id
        this.findOne(params.id).subscribe(item => {
          this.formValues = item
        })
      }

    })
  }



  saveItem($event: any) {
    switch ($event.type) {
      case 'add':
        this.save($event.payload).subscribe({ next:()=>this._snackBar.success('Menu item added successfully'), error: () => this._snackBar.error('error has occurred'), complete: () => this.route.navigate(['admin', 'menu-standAlone-table']) })
        break;
      case 'edit':
        {
          $event.payload.id = this.paramID
          this.update($event.payload, this.paramID).subscribe({ next:()=>this._snackBar.success('Menu item added successfully'), error: () => this._snackBar.error('error has occurred'), complete: () => this.route.navigate(['admin', 'menu-standAlone-table']) })
        }
        break;
    }
  }
}
