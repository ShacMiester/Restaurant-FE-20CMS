import { MenuCategoriesService } from './../services/menu-categories.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  // styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {
  dataSource: any
  constructor(private menuCategoryForm: MenuCategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.getMenuItemCategoryForm();
  }

  getMenuItemCategoryForm() {
    this.menuCategoryForm.getMenuCategories().subscribe(rows => {
      this.dataSource = rows;
    })
  }

  performAction(event: { row: any, action: 'edit' | 'delete' | 'add' }) {
    console.log(event.row)
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'menu-categories-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
      case 'delete':
        this.dataSource.forEach((element: any, index: number) => {
          if (element.id == event.row.id) {
            this.dataSource.splice(index, 10)
          }
        });
        break;
      case 'add':
        this.router.navigate(['/admin', 'menu-categories-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
    }
  }
}
