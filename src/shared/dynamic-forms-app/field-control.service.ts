import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { FormBase } from './atoms/form-base';

@Injectable()
export class FieldControlService {
  constructor() { }

  toFormGroup(fields: FormBase<string>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new UntypedFormControl(field.value || '', Validators.required) : new UntypedFormControl(field.value || '');
    });
    return new UntypedFormGroup(group);
  }
}
