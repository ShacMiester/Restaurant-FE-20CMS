import { FormBase } from './form-base';

export class RadioField extends FormBase<string> {
  override controlType = 'radio';
}
