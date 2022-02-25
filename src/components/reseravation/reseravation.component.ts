import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { QuestionService } from 'src/shared/dynamic-forms-app/question.service';

@Component({
  selector: 'app-reseravation',
  templateUrl: './reseravation.component.html',
  styleUrls: ['./reseravation.component.scss'],
  providers: [QuestionService]
})
export class ReservationComponent implements OnInit {
  reservationForm$: Observable<FormBase<any>[]>;

  constructor(service: QuestionService) {
    this.reservationForm$ = service.getQuestions();
    console.log(this.reservationForm$)
  }
  ngOnInit(): void {
  }

}
