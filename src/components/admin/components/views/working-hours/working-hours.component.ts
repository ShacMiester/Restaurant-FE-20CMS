import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.scss']
})
export class WorkingHoursComponent extends CrudService<any, number> implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  dataSource: any = [];
  constructor(protected override _http: HttpClient, private MatSnackBar: MatSnackBar, private router: Router) {
    super(_http, 'working-hours');
  }

  ngOnInit(): void {
    this.getWorkingHours();
  }

  getWorkingHours() {
    this.subscriptions.add(this.findAll().subscribe(
      {
        next: (v) => this.dataSource = v,
        error: (err) => this.openSnackBar('An error has occurred while retrieving the data')
      }))
  }

  openSnackBar(message: string) {
    this.MatSnackBar.open(message, 'Ok', { duration: 5000 })
  }

  performAction(event: { row: any, action: 'edit' | 'delete' | 'add' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'working-hours-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
      case 'delete':
        this.delete(event.row.id).subscribe({
          next: () => this.openSnackBar('Item deleted successfully'),
          error: (err) => this.openSnackBar('An error has occurred'),
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
