import { FormBase } from './form-base';

export class SubmitField extends FormBase<string> {
  override controlType = 'submit';
}
