import { MenuStandAloneService } from './menu-stand-alone.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CrudService } from 'src/components/admin/services/crud.service';
import { CateringService } from 'src/components/catering/catering.service';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuCategoriesService } from '../services/menu-categories.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-menu-stand-alone-form',
  templateUrl: './menu-stand-alone-form.component.html',
  styleUrls: ['./menu-stand-alone-form.component.scss']
})
export class MenuStandAloneFormComponent extends CrudService<any, number> implements OnInit {

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
          this.update($event.payload, this.paramID).subscribe({ next:()=>this._snackBar.success('Menu item updated successfully'), error: () => this._snackBar.error('error has occurred'), complete: () => this.route.navigate(['admin', 'menu-standAlone-table']) })
        }
        break;
    }
  }
}

