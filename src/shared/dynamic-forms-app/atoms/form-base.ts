import { Validators } from "@angular/forms";

export class FormBase<T> {
  value: T | number | string | undefined | boolean;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: any;
  options: { key: string, value: string | number, additionalInfo?: string }[];
  errorMessage: string;
  Validators: Validators[];
  disabled:boolean;
  hidden:boolean;

  constructor(options: {
    value?: T | number | string | undefined | boolean;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: any;
    options?: { key: string, value: string | number, additionalInfo?: string }[];
    errorMessage?: string;
    Validators?: Validators[];
    disabled?:boolean;
    hidden?:boolean
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.errorMessage = options.errorMessage || 'Unknown wrong input';
    this.Validators = [];
    this.disabled = options.disabled || false;
    this.hidden = options.hidden || false
  }
}
