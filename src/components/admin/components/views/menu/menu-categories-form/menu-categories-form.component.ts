import { MenuCategoriesService } from './../services/menu-categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-menu-categories-form',
  templateUrl: './menu-categories-form.component.html',
})
export class MenuCategoriesFormComponent
  extends CrudService<any, number>
  implements OnInit
{
  form$: any;
  formValues: any;
  paramID: number = 0;
  type: string = 'add' || 'edit';
  constructor(
    protected override _http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
    private menuCategoriesService: MenuCategoriesService,
    private snackBarService: SnackbarService
  ) {
    super(_http, 'menuCategories');
  }

  ngOnInit(): void {
    this.getMenuItems();
    this.getQueryParams();
  }

  getMenuItems() {
    this.menuCategoriesService.getMenuCategoryForm().subscribe((items) => {
      this.form$ = items;
    });
  }

  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      if (params.id && params.type == 'edit') {
        this.type = 'edit';
        this.paramID = params.id;
        this.findOne(params.id).subscribe((item) => {
          this.formValues = item;
        });
      }
    });
  }

  saveItem($event: any) {
    switch ($event.type) {
      case 'add':
        this.save($event.payload).subscribe({
          next: () =>
            this.snackBarService.success('Category added Successfully'),
          error: () => this.snackBarService.error('error has occurred'),
          complete: () => this.route.navigate(['admin', 'menu-categories']),
        });
        break;
      case 'edit':
        {
          $event.payload.id = this.paramID;
          this.update($event.payload, this.paramID).subscribe({
            next: () =>
              this.snackBarService.success('Category updated successfully'),
            error: () => this.snackBarService.error('error has occurred'),
            complete: () => this.route.navigate(['admin', 'menu-categories']),
          });
        }
        break;
    }
  }
}
