import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-special-items-table',
  templateUrl: './special-items-table.component.html',
  styleUrls: ['./special-items-table.component.scss'],
})
export class SpecialItemsTableComponent
  extends CrudService<any, number>
  implements OnInit, OnDestroy
{
  dataSource: any;
  Subscription: Subscription = new Subscription();
  constructor(
    private router: Router,
    protected override _http: HttpClient,
    private _snackBar: SnackbarService
  ) {
    super(_http, 'menuItems');
  }

  ngOnInit(): void {
    this.Subscription.add(this.getMenuItems());
  }

  getMenuItems() {
    this.findAll().subscribe({
      next: (v) => {
        this.dataSource = v.filter((item) => item.isSpecial == true);
      },
      error: (err) => this._snackBar.error('An error has occurred'),
    });
  }

  performAction(event: { row: any; action: 'edit' | 'delete' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'menu-item-special-form'], {
          queryParams: { id: event.row.id, type: event.action },
        });
        break;
      case 'delete':
        {
          event.row.isSpecial = false;
          this.update(event.row, event.row.id).subscribe({
            next: () =>
              this._snackBar.success(
                'Item was removed from special items category'
              ),
            error: (err) => this._snackBar.error('An error has occurred'),
            complete: () => this.Subscription.add(this.getMenuItems()),
          });
        }
        break;
    }
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
