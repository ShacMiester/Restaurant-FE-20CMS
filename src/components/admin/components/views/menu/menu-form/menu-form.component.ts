import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DropdownField } from './../../../../../../shared/dynamic-forms-app/atoms/form-dropdown';
import { CheckBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-checkbox';
import { TextBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-textbox';
import { ActivatedRoute, Router } from '@angular/router'
import { MenuFormService } from './../services/menu-form.service'
import { Component, OnInit } from '@angular/core'
import { MenuService } from './../services/menu.service'

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html'
  // styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {
  form$: any
  formValues: any
  constructor(
    private menuFormService: MenuFormService,
    private router: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.getQueryParams();
    this.getMenuItems();
  }

  getMenuItems() {
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
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  addNewSection(){
    // let newlyCreatedForm = new FormGroup([])
    this.profileForm.addControl(`name${Math.random()*100}`, new FormControl('', Validators.required));
  }
}
