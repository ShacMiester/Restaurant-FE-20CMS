import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.scss']
})
export class WorkingHoursComponent extends CrudService<any, number> implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  dataSource: any = [];
  constructor(protected override _http: HttpClient, private _snackBar: SnackbarService, private router: Router) {
    super(_http, 'WorkingHours');
  }

  ngOnInit(): void {
    this.getWorkingHours();
  }

  getWorkingHours() {
    this.subscriptions.add(this.findAll().subscribe(
      {
        next: (v) => this.dataSource = v,
        error: (err) => this._snackBar.error('An error has occurred while retrieving the data')
      }))
  }

  performAction(event: { row: any, action: 'edit' | 'delete' | 'add' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'working-hours-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
      case 'delete':
        this.delete(event.row.id).subscribe({
          next:()=>this._snackBar.success('Item deleted successfully'),
          error: (err) => this._snackBar.error('An error has occurred'),
          complete: () => this.subscriptions.add(this.getWorkingHours())
        })
        break;
      case 'add':
        this.router.navigate(['/admin', 'working-hours-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
