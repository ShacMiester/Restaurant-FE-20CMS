import { DateField } from './atoms/form-date';
import { CheckBoxField } from './atoms/form-checkbox';
import { Injectable } from '@angular/core';

import { DropdownField } from './atoms/form-dropdown';
import { FormBase } from './atoms/form-base';
import { TextBoxField } from './atoms/form-textbox';
import { of } from 'rxjs';
import { Validators } from '@angular/forms';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: FormBase<string>[] = [

      new DateField({
        // key: 'brave',
        // label: 'Bravery Rating',
        // options: [
        //   { key: 'solid', value: 'Solid' },
        //   { key: 'great', value: 'Great' },
        //   { key: 'good', value: 'Good' },
        //   { key: 'unproven', value: 'Unproven' }
        // ],
        // order: 3
        key: 'date',
        label: 'Date',
        value: '',
        type: 'date',
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
        key: 'emailAddress',
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
        key: 'people',
        value: 1,
        type: 'number',
        errorMessage: 'Please provide number of people',
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
