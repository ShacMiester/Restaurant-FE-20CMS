import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { DropdownField } from 'src/shared/dynamic-forms-app/atoms/form-dropdown';
import { ImageBoxField } from 'src/shared/dynamic-forms-app/atoms/form-image';
import { TextBoxField } from 'src/shared/dynamic-forms-app/atoms/form-textbox';

@Injectable({
  providedIn: 'root'
})
export class WorkingHoursService {

  constructor(
    private _http: HttpClient
  ) { }
  getWorkingHoursForm(): Observable<any> {
    let brunchList = [];
    this._http.get(environment.storeApi + '/branch').subscribe((brunches: any) => {
      brunches.map(branch => {
        brunchList.push({ key: branch.name, value: branch.id })
      })

    })
    const fieldList: FormBase<string>[] = [

      new DropdownField({
        key: 'branchID',
        label: "Brunch",
        value: '',
        order: 1,
        options: brunchList,
        required: true,
        errorMessage: 'Please select Branch'
      }),


    ];
    return of(fieldList.sort((a, b) => a.order - b.order));
  }
}
