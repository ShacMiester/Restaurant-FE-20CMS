import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuCategoriesService } from './../services/menu-categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-categories-form',
  templateUrl: './menu-categories-form.component.html',
  // styleUrls: ['./menu-categories-form.component.scss']
})
export class MenuCategoriesFormComponent extends CrudService<any, number> implements OnInit {

  form$: any
  formValues: any
  paramID: number = 0
  type: string = 'add' || 'edit'
  constructor(
    protected override _http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
    private menuCategoriesService: MenuCategoriesService,
    private _snackBar: MatSnackBar
  ) {
    super(_http, 'menuCategories');
  }

  ngOnInit(): void {
    this.getMenuItems();
    this.getQueryParams();
  }

  getMenuItems() {
    this.menuCategoriesService.getMenuCategoryForm().subscribe(items => {
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

  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', { duration: 5000 });
  }

  saveItem($event: any) {
    switch ($event.type) {
      case 'add':
        this.save($event.payload).subscribe({ next: () => this.openSnackBar('Category added successfully'), error: () => this.openSnackBar('error has occurred'), complete: () => this.route.navigate(['admin', 'menu-categories']) })
        break;
      case 'edit':
        {
          $event.payload.id = this.paramID
          this.update($event.payload,this.paramID).subscribe({ next: () => this.openSnackBar('Category added successfully'), error: () => this.openSnackBar('error has occurred'), complete: () => this.route.navigate(['admin', 'menu-categories']) })
        }
        break;
    }
  }
}
