import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
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
  constructor(private _http: HttpClient) { }
  applyNewField(): Observable<any> {
    this.getReservationForm().subscribe({
      next: (v) => this.reservationForm = v,
      complete: () => {
        this.reservationForm.push(
          new DropdownField(
            {
              label: 'Status',
              key: 'reservationStatus',
              options: [
                { key: 'Waiting for approval', value: 0 },
                { key: 'Accepted', value: 1 },
                { key: 'Rejected', value: 2 },
                { key: 'Cancelled', value: 3 }
              ]
            }))
      }
    })
    return of(this.reservationForm)
  }
  getReservationForm() {
    let branchesList = [];
    this._http.get(environment.storeApi + '/branch').subscribe((branches: any) => {
      branches.map(branch => {
        branchesList.push({ key: branch.name, value: branch.id })
      })
    })
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
      new DropdownField({
        key: 'branchID',
        label: "Select Branch",
        value: '',
        order: 10,
        options: branchesList
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
      }),
      new TextBoxField({
        key: 'description',
        label: 'Have more details?',
        value: '',
        order: 100
      })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
