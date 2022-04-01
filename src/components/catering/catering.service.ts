import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { DropdownField } from './../../shared/dynamic-forms-app/atoms/form-dropdown';
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
  constructor(private _http: HttpClient) { }
  cateringForm: any
  applyNewField(): Observable<any> {
    this.getCateringForm().subscribe({
      next: (v) => this.cateringForm = v,
      complete: () => {
        this.cateringForm.push(
          new DropdownField(
            {
              label: 'Status',
              key: 'cateringStatus',
              options: [
                { key: 'Waiting for approval', value: 0 },
                { key: 'Accepted', value: 1 },
                { key: 'Rejected', value: 2 },
                { key: 'Cancelled', value: 3 }
              ]
            }))
        this.cateringForm.push(
          new TextBoxField(
            {
              label: 'Rejection reason',
              key: 'rejectionReason',
            }))
      }
    })
    return of(this.cateringForm)
  }
  getCateringForm() {
    let branchesList = [];
    this._http.get(environment.storeApi + 'branch').subscribe((branches: any) => {
      branches.map(branch => {
        branchesList.push({ key: branch.name, value: branch.id })
      })
    })
    this.cateringForm = [
      new DropdownField({
        key: 'branchID',
        label: "Select Branch",
        value: '',
        order: 10,
        options: branchesList
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
