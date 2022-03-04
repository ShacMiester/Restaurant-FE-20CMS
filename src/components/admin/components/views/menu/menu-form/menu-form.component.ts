import { environment } from './../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DropdownField } from './../../../../../../shared/dynamic-forms-app/atoms/form-dropdown';
import { CheckBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-checkbox';
import { TextBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-textbox';
import { ActivatedRoute, Router } from '@angular/router'
import { MenuFormService } from './../services/menu-form.service'
import { Component, OnInit } from '@angular/core'
import { MenuService } from './../services/menu.service'
import { CrudService } from 'src/components/admin/services/crud.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html'
  // styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent extends CrudService<any, number> implements OnInit {
  form$: any
  formValues: any
  constructor(
    private menuFormService: MenuFormService,
    private router: ActivatedRoute,
    private menuService: MenuService,
    protected override _http: HttpClient
  ) { super(_http, ''); }

  ngOnInit(): void {
    this.getQueryParams();
    this.getMenuItems();
  }

  getMenuItems() {
    // this.findAll().subscribe(items => { })
    //crud operations to be used
    this.menuFormService.getMenuItemForm().subscribe(items => {
      this.form$ = items
    })
  }

  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      this.menuService.getMenuItems().subscribe(items => {
        items.map((item: any) => {
          if (item.id == params.id) this.formValues = item
        })
      })
    })
  }
}
