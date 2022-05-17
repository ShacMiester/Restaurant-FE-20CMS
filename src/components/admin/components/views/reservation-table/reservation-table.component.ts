import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/components/admin/services/crud.service';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent extends CrudService<any, number> implements OnInit {
  @Input() displayedColumns: string[] = []
  dataSource: any = []
  hideBar: boolean = false;
  options: [
    { key: 'Waiting for approval', value: 0 },
    { key: 'Accepted', value: 1 },
    { key: 'Rejected', value: 2 },
    { key: 'Cancelled', value: 3 }
  ]
  constructor(protected override _http: HttpClient, private _snackBar: MatSnackBar, public dialog: MatDialog,) { super(_http, 'reservations'); }

  ngOnInit(): void {
    this.getReservationsData()
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', { duration: 5000 });
  }

  getReservationsData() {
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
    console.log("this.dataSource", this.dataSource)
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
      next: (v) => this.getReservationsData(),
      error: (e) => this.openSnackBar('An error has occurred'),
      complete: () => {
        this.openSnackBar('item was deleted successfully')
        this.hideBar = true
      }
    })
  }
  //now
  getRecord(row: any) {
    const dialogRef = this.dialog.open(ReservationDetailsComponent, {
      width: '100vw',
      minWidth: '100vw',
      data: { item: row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getReservationsData();
        this.openSnackBar('Item was updated successfully')

      }

    });
  }
  openRecord(event){
    console.log(event);
    const dialogRef = this.dialog.open(ReservationDetailsComponent, {
     // width: '100vw',
     // minWidth: '100vw',
       width: '100vw',
       minWidth: 'fit-content',
       maxWidth: '50%',
      data: { item: event.row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getReservationsData();
        this.openSnackBar('Item was updated successfully')

      }

    });
  }
  print(data){
    console.log("data", data)
  }
}


