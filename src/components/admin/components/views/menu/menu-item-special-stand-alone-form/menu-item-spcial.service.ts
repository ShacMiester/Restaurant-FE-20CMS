import { DateField } from 'src/shared/dynamic-forms-app/atoms/form-date';
import { TimeField } from 'src/shared/dynamic-forms-app/atoms/form-time';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { CheckBoxField } from 'src/shared/dynamic-forms-app/atoms/form-checkbox';
import { DropdownField } from 'src/shared/dynamic-forms-app/atoms/form-dropdown';
import { TextBoxField } from 'src/shared/dynamic-forms-app/atoms/form-textbox';

@Injectable({
  providedIn: 'root'
})
export class MenuItemSpcialService {

  constructor(private _http: HttpClient) { }
  getStandAloneMenuForm(): Observable<any> {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(item => {
      return { key: item, value: item }
    })
    let menuItems = [];
    this._http.get(`${environment.storeApi}/MenuItems`).subscribe((items: any) => {
      items.map(items => {
        if (items.isSpecial == true)
        menuItems.push({ key: items.name, value: items.id })
      })
    })
    const questions: FormBase<string>[] = [
      new DropdownField({
        key: 'menuItemId',
        label: 'Select menu item',
        value: 11,
        required: true,
        hidden: false,
        options: menuItems
      }),
      new DropdownField({
        key: 'daysArray',
        label: 'Days',
        value: '',
        required: true,
        multiple: true,
        options: days,
        errorMessage: 'Days are required'
      }),
      new TimeField({
        key: 'timeFromHour',
        label: 'From',
        value: '',
        required: false,
      }),
      new TimeField({
        key: 'timeToHour',
        label: 'To',
        value: '',
        required: false,
      }),
      new DateField({
        key: 'intervalFrom',
        label: 'Starting date',
        value: '',
        required: false,
      }),
      new DateField({
        key: 'intervalTo',
        label: 'Ending date',
        value: '',
        required: false,
      }),
      // new ImageBoxField({
      //   key: 'imageURL',
      //   label: 'Image',
      //   value: '',
      //   required: true,
      //   errorMessage: 'Image is required'
      // }),
      // new TextBoxField({
      //   key: 'price',
      //   label: 'Price',
      //   value: '',
      //   type: 'number',
      //   required: true,
      //   errorMessage: 'Price is required'
      // }),
      // new CheckBoxField({
      //   key: 'suggestAtCheckout',
      //   label: 'Suggest At Checkout',
      //   value: false,
      //   type: 'checkbox',
      //   required: false,
      // }),
      // new CheckBoxField({
      //   key: 'isTemporarilyUnavailable',
      //   label: 'Temporarily unavailable',
      //   value: false,
      //   type: 'checkbox',
      //   required: false,
      // }),
      // new DropdownField({
      //   key: 'categoryId',
      //   label: "Select Category",
      //   value: '',
      //   order: 10,
      //   options: categories,
      //   required: true,
      //   errorMessage: 'Please select category'
      // }),
      // new CheckBoxField({
      //   key: 'isSpecial',
      //   label: 'Is special item',
      //   value: false,
      //   type: 'checkbox',
      //   required: false,
      // }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
