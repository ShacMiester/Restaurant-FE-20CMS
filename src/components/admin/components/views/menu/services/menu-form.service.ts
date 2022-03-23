import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { DropdownField } from './../../../../../../shared/dynamic-forms-app/atoms/form-dropdown';
import { CheckBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-checkbox';
import { TextBoxField } from './../../../../../../shared/dynamic-forms-app/atoms/form-textbox';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuFormService extends CrudService<any, number> {
  constructor(protected override _http: HttpClient) { super(_http, 'menuCategories') }
  specialDayStatus: boolean = false;
  getMenuItemForm(): Observable<any> {
    let categories: any = []
    // this.findAll().subscribe(categoriesItems => {
    //   categoriesItems.map(category => {
    //     categories.push({ key: category.name, value: category.id })
    //   })
    // })
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
      }),
      new TextBoxField({
        key: 'Image_URL',
        label: 'Image',
        value: '',
        type: 'text',
        required: true,
        errorMessage: 'Image is required'
      }),
      // new CheckBoxField({
      //   key: 'Is_Temporarily_Unavailable',
      //   label: 'Temporary Item?',
      //   value: false,
      //   type: 'checkbox',
      //   required: true,
      //   errorMessage: 'This field is required',
      // }),
      new CheckBoxField({
        key: 'Is_Special',
        label: 'Special?',
        value: false,
        type: 'checkbox',
        required: true,
        errorMessage: 'This field is required',
        callback: ($event: any) => { this.activateSpecialItemForm($event) }
      }),
      new DropdownField({
        key: 'categories',
        label: "select Categories",
        multiple: true,
        options: categories
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
  constructForm($event: any): Observable<any> {
    if ($event.value)
      return of([[new TextBoxField({ key: 'test', label: 'test', value: 'test', required: true })]])
    else return of([])
  }

  activateSpecialItemForm(event: any):Observable<any> {
    this.specialDayStatus = event
    return of(event.value)
  }

  // getCategories():Observable<any>{
  //   let categories: any = [];
  //    this.findAll().subscribe(categoriesObs=>{
  //     categories = categoriesObs
  //   })

  //   return categories
  // }
}
