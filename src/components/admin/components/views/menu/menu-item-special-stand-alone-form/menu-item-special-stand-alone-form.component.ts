import { environment } from './../../../../../../environments/environment';
import { MenuItemSpcialService } from './menu-item-spcial.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { MenuStandAloneService } from '../menu-stand-alone-form/menu-stand-alone.service';

@Component({
  selector: 'app-menu-item-special-stand-alone-form',
  templateUrl: './menu-item-special-stand-alone-form.component.html',
  styleUrls: ['./menu-item-special-stand-alone-form.component.scss']
})
export class MenuItemSpecialStandAloneFormComponent extends CrudService<any, number> implements OnInit {

  form$: any
  formValues: any
  paramID: number = 0
  type: string = 'add' || 'edit'
  menuItemId: number = 0
  id: number = 0
  constructor(
    protected override _http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
    private menuCategoriesService: MenuItemSpcialService,
    private _snackBar: MatSnackBar
  ) {
    super(_http, 'menuItems/AddSpecial');
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
        this.menuItemId = this.paramID
        this._http.get(environment.storeApi + '/menuItemSpecial/getByItemId/' + params.id).subscribe((special: any) => {
          this.formValues = special
          if (special['id'] != null && special['id'] != undefined) {
            this.id = special.id
            this.type = 'edit'
          }
          else
            this.type = 'add'
        })
      }

    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', { duration: 5000 });
  }

  saveItem($event: any) {
    console.log($event)
    switch (this.type) {
      case 'add':
        this.save($event.payload).subscribe({ next: () => this.openSnackBar('Menu item added successfully'), error: () => this.openSnackBar('error has occurred'), complete: () => this.route.navigate(['admin', 'menu-items-special-table']) })
        break;
      case 'edit':
        {
          $event.payload.menuItemId = this.paramID
          $event.payload.id = this.id
          this.save($event.payload).subscribe({ next: () => this.openSnackBar('Menu item added successfully'), error: () => this.openSnackBar('error has occurred'), complete: () => this.route.navigate(['admin', 'menu-items-special-table']) })
        }
        break;
    }
  }
}
