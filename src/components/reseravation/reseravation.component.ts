import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { QuestionService } from 'src/shared/dynamic-forms-app/question.service';
import { CrudService } from '../admin/services/crud.service';

@Component({
  selector: 'app-reseravation',
  templateUrl: './reseravation.component.html',
  styleUrls: ['./reseravation.component.scss'],
  providers: [QuestionService]
})
export class ReservationComponent extends CrudService<any, number> implements OnInit {
  reservationForm$: Observable<FormBase<any>[]>;

  constructor(service: QuestionService, protected override _http: HttpClient) {
    super(_http, 'reservations');
    this.reservationForm$ = service.getQuestions();
  }
  ngOnInit(): void {
  }
  reserve(event: any) {
    this.save(event).subscribe()
  }

}
