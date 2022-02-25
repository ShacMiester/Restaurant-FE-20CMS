import { FormBase } from './form-base';

export class TextBoxField extends FormBase<string> {
  override controlType = 'textbox';
}
