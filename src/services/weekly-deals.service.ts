import { DropdownField } from './../shared/dynamic-forms-app/atoms/form-dropdown';
import { TextBoxField } from './../shared/dynamic-forms-app/atoms/form-textbox';
import { OfferItem } from './../entities/weekly-offer.entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeeklyDealsService {

  constructor() { }
  someOffers: OfferItem[] = [
    { day: 'Monday', dayDescription: 'Monday Description', item: 'kebab', newPrice: 10, oldPrice: 71 },
    { day: 'Tuesday', dayDescription: 'Tuesday Description', item: 'kebab special', newPrice: 10, oldPrice: 37 },
    { day: 'Wednesday', dayDescription: 'Wednesday Description', item: 'kebab Mashawi', newPrice: 10, oldPrice: 17 }
  ]
  getOfferItems(): Observable<any[]> {
    return of(this.someOffers)
  }

  getWeeklyDealsForm(): Observable<any> {
    const Form = [
      new TextBoxField({
        type: "text",
        key: 'item_name',
        errorMessage: 'Item name is required',
        label: "Item name",
        order: 1,
        required: true
      }
      ),
      new DropdownField({
        key: 'day',
        multiple: false,
        label: 'Select day',
        options: [
          { key: 'monday', value: 'Monday' },
          { key: 'tuesday', value: 'Tuesday' },
          { key: 'wednesday', value: 'Wednesday' },
          { key: 'thursday', value: 'Thursday' },
          { key: 'friday', value: 'Friday' },
          { key: 'saturday', value: 'Saturday' },
          { key: 'sunday', value: 'Sunday' }
        ],
        errorMessage: 'Day is required',
        required: true
      }),
      new TextBoxField({ type: 'text', label: 'Description', key: 'description', required: true }),
      new TextBoxField({ type: 'number', label: 'Old price', key: 'old_price', required: true }),
      new TextBoxField({ type: 'number', label: 'Current price', key: 'new_price', required: true })
    ]
    return of(Form)
  }
}
