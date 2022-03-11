import { FormBase } from './form-base';

export class TimeField extends FormBase<string> {
  override controlType = 'time';
}
