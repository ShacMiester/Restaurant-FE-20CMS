import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { QuestionService } from 'src/shared/dynamic-forms-app/question.service';
import { CrudService } from '../admin/services/crud.service';

@Component({
  selector: 'app-reseravation',
  templateUrl: './reseravation.component.html',
  styleUrls: ['./reseravation.component.scss'],
  providers: [QuestionService, MatSnackBar]
})
export class ReservationComponent extends CrudService<any, number> implements OnInit {
  reservationForm$: Observable<FormBase<any>[]>;

  constructor(service: QuestionService, protected override _http: HttpClient, private _snackBar: MatSnackBar) {
    super(_http, 'reservations');
    this.reservationForm$ = service.getQuestions();
  }
  ngOnInit(): void {
  }
  reserve(event: any) {
    this.save(event.payload).subscribe({
      error: (err) => { this._snackBar.open('An error has occurred! please try again later', 'ok', { duration: 5000 }) },
      complete: () => { this._snackBar.open(`We received your message, we'll get back to you.`, 'ok', { duration: 5000 }) }
    })
  }

}
