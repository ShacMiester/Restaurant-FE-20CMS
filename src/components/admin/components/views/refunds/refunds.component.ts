import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/components/admin/services/crud.service';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss']
})
export class RefundsComponent extends CrudService<any, number> implements OnInit {
  @Input() displayedColumns: string[] = []
  dataSource: any = []
  hideBar: boolean = false;

  constructor(protected override _http: HttpClient, private _snackBar: MatSnackBar, public dialog: MatDialog,) { super(_http, 'Orders'); }

  ngOnInit(): void {
    this.getOrders()
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', { duration: 5000 });
  }

  getOrders() {
    this.hideBar = false
    this.findAll().subscribe(
      {
        next: (v) => this.constructTableData(v),
        error: (e) => this.openSnackBar('An error has occurred'),
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
      error: (e) => this.openSnackBar('An error has occurred'),
      complete: () => {
        this.openSnackBar('item was deleted successfully')
        this.hideBar = true
      }
    })
  }

  refund(order) {

  }
}
