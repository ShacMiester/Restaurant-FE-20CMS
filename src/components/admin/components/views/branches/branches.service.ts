import { ImageBoxField } from './../../../../../shared/dynamic-forms-app/atoms/form-image';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { TextBoxField } from 'src/shared/dynamic-forms-app/atoms/form-textbox';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  getBranchForm(): Observable<any> {
    const questions: FormBase<string>[] = [
      new TextBoxField({
        key: 'name',
        label: 'Branch name',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Name is required'
      }),
      new ImageBoxField({
        key: 'imageURL',
        label: 'Upload Image',
        value: '',
        type:'text',
        required: true,
        errorMessage: 'Name is required',
      }),

    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
