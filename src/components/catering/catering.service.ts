import { DropdownField } from './../../shared/dynamic-forms-app/atoms/form-dropdown';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { DateField } from 'src/shared/dynamic-forms-app/atoms/form-date';
import { TextBoxField } from 'src/shared/dynamic-forms-app/atoms/form-textbox';
import { TimeField } from 'src/shared/dynamic-forms-app/atoms/form-time';

@Injectable({
  providedIn: 'root'
})
export class CateringService {
  cateringForm: any
  applyNewField(): Observable<any> {
    this.getCateringForm().subscribe({
      next: (v) => this.cateringForm = v,
      complete: () => {
        this.cateringForm.push(
          new DropdownField(
            {
              label: 'Status',
              key: 'Status',
              options: [
                { key: 'Waiting_for_approval', value: "Waiting for approval" },
                { key: 'Accepted', value: 'Accepted' },
                { key: 'Rejected', value: 'Rejected'},
                { key: 'Cancelled', value: 'Cancelled' }
              ]
            }))
      }
    })
    return of(this.cateringForm)
  }
  getCateringForm() {
    this.cateringForm = [
      new DropdownField({
        key: 'branchID',
        label: "Select Branch",
        value: '',
        order: 10,
        options: [{ key: 'Branch 1', value: 1, }, { key: 'Branch2', value: 2, }]
      }),
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
      }),
      new TextBoxField({
        label: 'Description',
        controlType: 'Description',
        required: false,
        type: 'textarea',
        key: 'description',
        order: 9
      }),
    ];

    return of(this.cateringForm.sort((a: any, b: any) => a.order - b.order));
  }
}
