import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from './atoms/form-base';

@Injectable()
export class FieldControlService {
  constructor() { }

  toFormGroup(fields: FormBase<string>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
