import { CheckBoxField } from './../../../shared/dynamic-forms-app/atoms/form-checkbox';
import { TextBoxField } from './../../../shared/dynamic-forms-app/atoms/form-textbox';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }
  //return categories
  getMenuCategories(): Observable<any> {
    return of([])
  }
  //return items
  getMenuItems(): Observable<any> {
    return of([])
  }
  getSpecificItemForm() {
    const questions: FormBase<string>[] = [
      new TextBoxField({
        key: 'request',
        label: 'Special requests?',
        value: '',
        type: 'textarea',
        required: false,
        order: 1
      }),
      new TextBoxField({
        label: 'Quantity',
        controlType: 'number',
        required: true,
        key: 'quantity',
        value: 1,
        type: 'number',
        order: 2
      }),
      new CheckBoxField({
        key: 'rice',
        label: 'Your choice of favorite rice',
        required: true,
        options: [{ key: 'kabsah rice', value: 'Kabseh' }, { key: 'white-rice', value: 'white rice', additionalInfo: '12$' }]
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
