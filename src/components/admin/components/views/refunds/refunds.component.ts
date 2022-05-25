import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss']
})
export class RefundsComponent extends CrudService<any, number> implements OnInit {
  @Input() displayedColumns: string[] = []
  dataSource: any = []
  hideBar: boolean = false;

  constructor(protected override _http: HttpClient, private _snackBar: SnackbarService, public dialog: MatDialog,) { super(_http, 'Orders'); }

  ngOnInit(): void {
    this.getOrders()
  }


  getOrders() {
    this.hideBar = false
    this.findAll().subscribe(
      {
        next: (v) => this.constructTableData(v),
        error: (e) => this._snackBar.error('An error has occurred'),
        complete: () => {
          this.hideBar = true
        }
      }
    )
  }

  constructTableData(tableData: any) {
    this.dataSource = tableData
    this.hideBar = true
    this.constructColumns(tableData)
  }
  constructColumns(columnData: any) {
    if (!this.displayedColumns.length) {
      this.displayedColumns = Object.keys(columnData[0]).map(col => { return col })
    }
  }

  removeItem(row: any) {
    this.hideBar = false
    this.delete(row.id).subscribe({
      next: (v) => this.getOrders(),
      error: (e) => this._snackBar.error('An error has occurred'),
      complete: () => {
        this._snackBar.success('item was deleted successfully')
        this.hideBar = true
      }
    })
  }

  refund(order) {

  }
}
