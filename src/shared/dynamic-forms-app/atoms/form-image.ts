import { FormBase } from './form-base';

export class ImageBoxField extends FormBase<string> {
  override controlType = 'image';
}
