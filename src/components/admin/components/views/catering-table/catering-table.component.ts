import { CateringDetailsComponent } from './catering-details/catering-details.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/components/admin/services/crud.service';

import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catering-table',
  templateUrl: './catering-table.component.html',
  styleUrls: ['./catering-table.component.scss']
})
export class CateringTableComponent extends CrudService<any, number> implements OnInit {

  @Input() displayedColumns: string[] = []
  dataSource: any = []
  hideBar: boolean = false;
  Subscription : Subscription = new Subscription();
  constructor(protected override _http: HttpClient, private _snackBar: SnackbarService, public dialog: MatDialog,) { super(_http, 'catering'); }

  ngOnInit(): void {
    this.getCateringData()
  }

  getCateringData() {
    this.hideBar = false
    this.Subscription.add(this.findAll().subscribe(
      {
        next: (v) => this.constructTableData(v),
        error: (e) => this._snackBar.error('An error has occurred'),
        complete: () => {
          this.hideBar = true
        }
      }
    ))
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
      error: (e) => this._snackBar.error('An error has occurred'),
      complete: () => {
        this._snackBar.success('item was deleted successfully')
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
        this._snackBar.success('item was updated Successfully')
      }
    });
  }
  openRecord(event) {
    console.log(event);
    const dialogRef = this.dialog.open(CateringDetailsComponent, {
      width: '100vw',
      minWidth: 'fit-content',
      maxWidth: '50%',
      data: { item: event.row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update(result,result.id).subscribe();
        this.getCateringData();
        this._snackBar.success('Item was updated successfully')

      }

    });
  }
  changeStatus(data, status: number) {
    console.log(data)
    data['cateringStatus'] = status
    this.update(data, data.id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => { this.getCateringData() }
    })
  }


}
