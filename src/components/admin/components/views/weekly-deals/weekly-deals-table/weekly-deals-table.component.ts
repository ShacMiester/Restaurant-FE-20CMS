import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { WeeklyDealsService } from './../../../../../../services/weekly-deals.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-weekly-deals-table',
  templateUrl: './weekly-deals-table.component.html',
  styleUrls: ['./weekly-deals-table.component.scss'],
})
export class WeeklyDealsTableComponent extends CrudService<any, number> implements OnInit {
  dataSource: any = []
  constructor(private weeklyDealsService: WeeklyDealsService, protected override _http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
    super(_http, 'weekly-deals')
  }

  ngOnInit(): void {
    this.getDeals();
  }
  getDeals() {
    this.findAll().subscribe({
      next: (v) => { this.dataSource = v },
      error: (err) => { console.log(err) },
      complete: () => {
        //hide snackbar
        //hide query loading
      }
    })
  }

  performAction(event: { row: any, action: 'edit' | 'delete' | 'add' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'weekly-deals-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
      case 'delete':
        this.delete(event.row.id).subscribe({
          next: (v) => {
            this.getDeals();
          },
          error: (err) => {
            this._snackBar.open('An error has occurred', 'ok')
          },
          complete: () => this._snackBar.open('Item is deleted successfully', 'ok')
        })
        break;
      case 'add':
        this.router.navigate(['/admin', 'weekly-deals-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
    }
  }
}
