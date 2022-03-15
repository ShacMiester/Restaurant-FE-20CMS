import { DropdownField } from './atoms/form-dropdown';
import { TimeField } from './atoms/form-time';
import { DateField } from './atoms/form-date';
import { Injectable } from '@angular/core';
import { FormBase } from './atoms/form-base';
import { TextBoxField } from './atoms/form-textbox';
import { Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';

@Injectable()
export class QuestionService {
  reservationForm: any

  applyNewField(): Observable<any> {
    this.getReservationForm().subscribe({
      next: (v) => this.reservationForm = v,
      complete: () => {
        this.reservationForm.push(
          new DropdownField(
            {
              label: 'Status',
              key: 'Status',
              options: [
                { key: 'Waiting for approval', value: "Waiting for approval" },
                { key: 'Accepted', value: 'Accepted' },
                { key: 'Rejected', value: 'Rejected' },
                { key: 'Cancelled', value: 'Cancelled' }
              ]
            }))
      }
    })
    return of(this.reservationForm)
  }
  getReservationForm() {
    const questions: FormBase<string>[] = [
      new DateField({
        key: 'date',
        label: 'Date',
        value: '',
        type: Date,
        required: true,
        order: 5,
        errorMessage: 'Date is required'
      }),
      new TextBoxField({
        key: 'name',
        label: 'Full name',
        value: '',
        type: 'text',
        required: true,
        order: 1,
        errorMessage: 'Name is required'
      }),
      new TextBoxField({
        key: 'email',
        required: true,
        label: 'Email',
        type: 'email',
        order: 2,
        errorMessage: 'Email is required'
      }),
      new TextBoxField(
        {
          key: 'phoneNumber',
          label: 'Phone number',
          type: 'text',
          required: true,
          order: 2,
          errorMessage: 'Phone is required',
          Validators: [Validators.pattern('[- +()0-9]+')]
        }),
      new TextBoxField({
        label: 'Number of people',
        controlType: 'number',
        required: true,
        key: 'numberOfPeople',
        value: 1,
        type: 'number',
        errorMessage: 'Please provide number of people',
        order: 3
      }),
      new TimeField({
        label: 'time',
        controlType: 'time',
        required: true,
        key: 'time',
        errorMessage: 'Please provide number of people',
        order: 3
      })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
