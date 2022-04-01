import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  // styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent extends CrudService<any, number> implements OnInit, OnDestroy {
  dataSource = []
  items
  constructor(private MenuService: MenuService, private router: Router, protected override _http: HttpClient) {
    super(_http, 'MenuItems')
  }
  subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(this.getMenuItems())
    // this.subscriptions.add(this.MenuService.getMenuItems().subscribe(items => {
    //   this.dataSource = items
    // }))

  }

  getMenuItems(){
    this.findAll().subscribe(a=>this.dataSource =a)
  }
  performAction(event: { row: any, action: 'edit' | 'delete' | 'add' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'menu-items-forms'], { queryParams: { id: event.row.id, type: event.action } })
        break;
      case 'delete':
        this.dataSource.forEach((element: any, index) => {
          if (element.id == event.row.id) {
            this.dataSource.splice(index, 10)
          }
        });
        break;
      case 'add':
        this.router.navigate(['/admin', 'menu-items-forms'], { queryParams: { id: event.row.id, type: event.action } })
        break;
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
