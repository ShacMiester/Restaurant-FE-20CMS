import { CheckBoxField } from './../../../shared/dynamic-forms-app/atoms/form-checkbox';
import { TextBoxField } from './../../../shared/dynamic-forms-app/atoms/form-textbox';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenuCategoryForm(): Observable<any> {
    const questions: FormBase<string>[] = [

      new TextBoxField({
        key: 'Name',
        label: 'Item name',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Name is required'
      }),
      new TextBoxField({
        key: 'Description',
        label: 'Item description',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Description is required'
      }),
      new TextBoxField(
        {
          key: 'Price',
          label: 'Price',
          type: 'number',
          required: true,
          value: 1,
          errorMessage: 'Price is required',
        }),
      new CheckBoxField({
        label: 'Options',
        required: false,
        key: 'Has_Options',
        type: 'number',
        value: false
      }),
      new TextBoxField({
        key: 'Image_URL',
        label: 'Image',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Image is required'
      }),
      new CheckBoxField({
        key: 'Is_Temporarily_Unavailable',
        label: 'Temporary Item?',
        value: false,
        type: 'checkbox',
        required: true,
        errorMessage: 'This field is required',
      }),
      new CheckBoxField({
        key: 'Is_Special',
        label: 'Special?',
        value: false,
        type: 'checkbox',
        required: true,
        errorMessage: 'This field is required',
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
