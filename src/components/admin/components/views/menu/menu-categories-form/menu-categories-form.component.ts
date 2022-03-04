import { MenuCategoriesService } from './../services/menu-categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-categories-form',
  templateUrl: './menu-categories-form.component.html',
  // styleUrls: ['./menu-categories-form.component.scss']
})
export class MenuCategoriesFormComponent implements OnInit {

  form$: any
  formValues: any
  constructor(
    private router: ActivatedRoute,
    private menuCategoriesService: MenuCategoriesService,
  ) { }

  ngOnInit(): void {
    this.getQueryParams();
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuCategoriesService.getMenuCategoryForm().subscribe(items => {
      this.form$ = items
    })
  }

  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      this.menuCategoriesService.getMenuCategories().subscribe(items => {
        items.map((item: any) => {
          if (item.id == params.id) this.formValues = item
        })
      })
    })
  }
  save($event: any) {
    this.menuCategoriesService.save($event)
  }
}
