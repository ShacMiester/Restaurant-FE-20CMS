import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  // styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit, OnDestroy {
  dataSource = []
  constructor(private MenuService: MenuService, private router: Router) { }
  subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(this.MenuService.getMenuItems().subscribe(items => {
      this.dataSource = items
    }))

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
