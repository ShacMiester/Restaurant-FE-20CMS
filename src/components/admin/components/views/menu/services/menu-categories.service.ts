import { TextBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-textbox';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuCategoriesService {

  getMenuCategoryForm(): Observable<any> {
    const questions: FormBase<string>[] = [
      new TextBoxField({
        key: 'name',
        label: 'Category name',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Name is required'
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
