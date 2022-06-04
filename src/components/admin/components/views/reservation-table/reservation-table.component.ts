import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent extends CrudService<any, number> implements OnInit {
  @Input() displayedColumns: string[] = []
  dataSource: any = []
  hideBar: boolean = false;

  constructor(protected override _http: HttpClient, private _snackBar: SnackbarService, public dialog: MatDialog,) { super(_http, 'reservations'); }

  ngOnInit(): void {
    this.getReservationsData()
  }


  getReservationsData() {
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
      next: (v) => this.getReservationsData(),
      error: (e) => this._snackBar.error('An error has occurred'),
      complete: () => {
        this._snackBar.success('item was deleted successfully')
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
        this.update(result,result.id).subscribe()
        this.getReservationsData();
        this._snackBar.success('Item was updated successfully')

      }

    });
  }
  openRecord(event) {
    const dialogRef = this.dialog.open(ReservationDetailsComponent, {
      width: '100vw',
      minWidth: 'fit-content',
      maxWidth: '50%',
      data: { item: event.row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getReservationsData();

      }

    });
  }
  fixData(data){
    let obj =  {id: data.id, name: data.name, notes: data.notes, numberOfPeople: data.numberOfPeople, phoneNumber: data.phoneNumber, email: data.email, rejectionReason: data.rejectionReason, branchID: data.branch.id, reservationStatus: data.reservationStatus
    }
    return obj;
  }
  changeStatus(data, status: number) {
    data['reservationStatus'] = status;
    let obj = this.fixData(data);
    this.update(obj, data.id).subscribe({
      complete: () => { this.getReservationsData() }
    })
  }
}


