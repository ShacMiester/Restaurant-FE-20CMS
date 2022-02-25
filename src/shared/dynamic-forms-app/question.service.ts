import { CheckBoxField } from './atoms/form-checkbox';
import { Injectable } from '@angular/core';

import { DropdownField } from './atoms/form-dropdown';
import { FormBase } from './atoms/form-base';
import { TextBoxField } from './atoms/form-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: FormBase<string>[] = [

      new DropdownField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new TextBoxField({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),
      new CheckBoxField(
        {
          key: 'isGood',
          label: 'topping?',
          type: 'radio',
          order: 2
        })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
