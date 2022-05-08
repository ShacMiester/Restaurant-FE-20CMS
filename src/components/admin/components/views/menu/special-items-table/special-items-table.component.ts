import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/components/admin/services/crud.service';

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
    private _snackBar: MatSnackBar
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
      error: (err) => this.openSnackBar('An error has occurred', 'ok'),
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
              this.openSnackBar(
                'Item was removed from special items category',
                'Ok'
              ),
            error: (err) => this.openSnackBar('An error has occurred', 'Ok'),
            complete: () => this.Subscription.add(this.getMenuItems()),
          });
        }
        break;
    }
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

  openSnackBar(message: string, button: string) {
    this._snackBar.open(message, button, { duration: 5000 });
  }
}
