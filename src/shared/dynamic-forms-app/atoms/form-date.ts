import { FormBase } from './form-base';

export class DateField extends FormBase<string> {
  override controlType = 'date';
}
