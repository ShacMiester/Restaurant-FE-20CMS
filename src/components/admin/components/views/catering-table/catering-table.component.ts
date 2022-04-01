import { CateringDetailsComponent } from './catering-details/catering-details.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/components/admin/services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-catering-table',
  templateUrl: './catering-table.component.html',
  styleUrls: ['./catering-table.component.scss']
})
export class CateringTableComponent extends CrudService<any, number> implements OnInit {

  @Input() displayedColumns: string[] = []
  dataSource: any = []
  hideBar: boolean = false
  constructor(protected override _http: HttpClient, private _snackBar: MatSnackBar, public dialog: MatDialog,) { super(_http, 'catering'); }

  ngOnInit(): void {
    this.getCateringData()
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', { duration: 5000 });
  }

  getCateringData() {
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
    if (!this.displayedColumns.length && columnData[0]) {
      this.displayedColumns = Object.keys(columnData[0]).map(col =>  { return col })

    }
  }

  removeItem(row: any) {
    this.hideBar = false
    this.delete(row.id).subscribe({
      next: (v) => this.getCateringData(),
      error: (e) => this.openSnackBar('An error has occurred'),
      complete: () => {
        this.openSnackBar('item was deleted successfully')
        this.hideBar = true
      }
    })
  }
  getRecord(row: any) {
    const dialogRef = this.dialog.open(CateringDetailsComponent, {
      width: '100vw',
      data: { item: row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCateringData();
        this.openSnackBar('item was updated Successfully')
      }
    });
  }
}
