import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-menu-stand-alone-table',
  templateUrl: './menu-stand-alone-table.component.html',
  styleUrls: ['./menu-stand-alone-table.component.scss'],
})
export class MenuStandALoneTableComponent
  extends CrudService<any, number>
  implements OnInit, OnDestroy
{
  dataSource: any;
  Subscription: Subscription = new Subscription();
  constructor(
    private router: Router,
    protected override _http: HttpClient,
    private snackBarService: SnackbarService
  ) {
    super(_http, 'menuItems');
  }

  ngOnInit(): void {
   this.getMenuItems();
  }

  getMenuItems() {
    this.Subscription.add(this.findAll().subscribe({
      next: (v) => {
        this.dataSource = v;
      },
      error: (err) => this.snackBarService.error('An error has occurred'),
    }));
  }

  performAction(event: { row: any; action: 'edit' | 'delete' | 'add' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'menu-standAlone-form'], {
          queryParams: { id: event.row.id, type: event.action },
        });
        break;
      case 'delete':
        this.delete(event.row.id).subscribe({
          next: () => this.getMenuItems(),
          error: (err) => this.snackBarService.error('An error has occurred'),
          complete:()=>this.snackBarService.success('Item deleted successfully')
        });
        break;
      case 'add':
        this.router.navigate(['/admin', 'menu-standAlone-form'], {
          queryParams: { id: event.row.id, type: event.action },
        });
        break;
    }
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

  editOptions(event) {
    this.router.navigate(['/admin', 'menu-items-options'], {
      queryParams: { id: event.id },
    });
  }
}
