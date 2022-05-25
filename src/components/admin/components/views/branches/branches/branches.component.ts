import { Subscription } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent extends CrudService<any, number> implements OnInit, OnDestroy {
  dataSource: any
  Subscription: Subscription = new Subscription()
  constructor(private router: Router, protected override _http: HttpClient, private _snackBar: SnackbarService) {
    super(_http, 'branch');
  }

  ngOnInit(): void {
    this.Subscription.add(this.getBranches())
  }

  getBranches() {
    this.findAll().subscribe(
      {
        next: (v) => { this.dataSource = v },
        error: (err) => this._snackBar.error('An error has occurred')
      }
    )
  }

  performAction(event: { row: any, action: 'edit' | 'delete' | 'add' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'branches-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
      case 'delete':
        this.delete(event.row.id).subscribe({ next: () => this._snackBar.success('Item deleted successfully'), error: (err) => this._snackBar.error('An error has occurred'), complete: () => this.Subscription.add(this.getBranches()) })
        break;
      case 'add':
        this.router.navigate(['/admin', 'branches-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
    }
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }


}
