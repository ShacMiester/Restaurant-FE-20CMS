import { FormBase } from './form-base';

export class PasswordField extends FormBase<string> {
  override controlType = 'password';
}
