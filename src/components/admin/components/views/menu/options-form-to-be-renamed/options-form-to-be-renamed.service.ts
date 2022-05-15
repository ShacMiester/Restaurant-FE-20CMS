import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { TextBoxField } from 'src/shared/dynamic-forms-app/atoms/form-textbox';

@Injectable({
  providedIn: 'root'
})
export class OptionsFormToBeRenamedService {
  someForm: Observable<FormBase<string>[]> = of([
    new TextBoxField({
      key: 'name',
      label: 'Name',
      value: '',
      type: 'text',
      required: true,
      errorMessage: 'Name is required'
    }),
  ])
  constructor(private _http: HttpClient) { }
}
