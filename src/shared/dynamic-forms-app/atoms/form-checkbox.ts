import { FormBase } from './form-base';

export class CheckBoxField extends FormBase<string> {
  override controlType = 'checkbox';
}
