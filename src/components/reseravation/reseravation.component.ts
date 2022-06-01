import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Reservationervice } from 'src/shared/dynamic-forms-app/reservation.service';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { CrudService } from '../admin/services/crud.service';

@Component({
  selector: 'app-reseravation',
  templateUrl: './reseravation.component.html',
  styleUrls: ['./reseravation.component.scss'],
  providers: []
})
export class ReservationComponent extends CrudService<any, number> implements OnInit {
  reservationForm$: Observable<FormBase<any>[]>;

  constructor(service: Reservationervice, protected override _http: HttpClient, private _snackBar: SnackbarService) {
    super(_http, 'reservations');
    this.reservationForm$ = service.getReservationForm();
  }
  ngOnInit(): void {
  }
  reserve(event: any) {
    this.save(event.payload).subscribe({
      error: (err) => { this._snackBar.error('An error has occurred! please try again later') },
      complete: () => { this._snackBar.success(`We received your message, we'll get back to you.`) }
    })
  }

}
