import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/components/admin/services/crud.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { Reservationervice } from "../../../../../../shared/dynamic-forms-app/reservation.service";

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss'],
  providers: [Reservationervice]
})
export class ReservationDetailsComponent extends CrudService<any, number> implements OnInit {
  reservationForm$: any
  reservationFormValues: any
  edit: boolean = false;

  constructor(private reservationService: Reservationervice, protected override _http: HttpClient, public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private snackBaraservice: SnackbarService) {
    super(_http, 'reservations');
  }
  ngOnInit(): void {
    this.getReservationForm();
  }
  getReservationForm() {
    this.reservationService.getReservationForm().subscribe(
      {
        next: (v) => {
          this.reservationForm$ = v
          this.reservationService.applyNewField().subscribe({ next: (b) => this.reservationForm$ = b })
        },
        complete: () => {
          this.reservationFormValues = this.data.item
        }
      }
    )
  }

  reserve(event: any) {
    this.update(event.payload, this.data.item.id).subscribe({
      error: (err) => { this.snackBaraservice.error('Failed to updated reservation.') },
      complete: () => {
        this.snackBaraservice.success('Reservation updated successfully.')
        this.dialogRef.close(true)
      }
    })
  }
}
