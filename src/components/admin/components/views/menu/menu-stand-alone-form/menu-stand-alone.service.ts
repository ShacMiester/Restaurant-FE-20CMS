import { HttpClient } from '@angular/common/http';
import { DropdownField } from './../../../../../../shared/dynamic-forms-app/atoms/form-dropdown';
import { CheckBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-checkbox';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { ImageBoxField } from 'src/shared/dynamic-forms-app/atoms/form-image';
import { TextBoxField } from 'src/shared/dynamic-forms-app/atoms/form-textbox';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MenuStandAloneService {

  constructor(private _http: HttpClient) { }
  getStandAloneMenuForm(): Observable<any> {
    let categories = [];
    this._http.get(environment.storeApi + '/menuCategories').subscribe((categoriesList: any) => {
      categoriesList.map(category => {
        categories.push({ key: category.name, value: category.id })
      })
    })
    const questions: FormBase<string>[] = [
      new TextBoxField({
        key: 'name',
        label: 'Name',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Name is required'
      }),
      new TextBoxField({
        key: 'description',
        label: 'Description',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Description is required'
      }),
      // new ImageBoxField({
      //   key: 'imageURL',
      //   label: 'Image',
      //   value: '',
      //   required: true,
      //   errorMessage: 'Image is required'
      // }),
      new TextBoxField({
        key: 'price',
        label: 'Price',
        value: '',
        type: 'number',
        required: true,
        errorMessage: 'Price is required'
      }),
      new CheckBoxField({
        key: 'suggestAtCheckout',
        label: 'Suggest At Checkout',
        value: false,
        type: 'checkbox',
        required: false,
      }),
      new CheckBoxField({
        key: 'isTemporarilyUnavailable',
        label: 'Temporarily unavailable',
        value: false,
        type: 'checkbox',
        required: false,
      }),
      new DropdownField({
        key: 'categoryId',
        label: "Select Category",
        value: '',
        order: 10,
        options: categories,
        required: true,
        errorMessage: 'Please select category'
      }),
      new CheckBoxField({
        key: 'isSpecial',
        label: 'Is special item',
        value: false,
        type: 'checkbox',
        required: false,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
