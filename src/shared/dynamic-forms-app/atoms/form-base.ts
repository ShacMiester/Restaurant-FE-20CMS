import { Validators } from "@angular/forms";

export class FormBase<T> {
  value: T | number | string | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: any;
  options: { key: string, value: string, additionalInfo?: string }[];
  errorMessage: string;
  Validators: Validators[]

  constructor(options: {
    value?: T | number | string | undefined;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: any;
    options?: { key: string, value: string, additionalInfo?: string }[];
    errorMessage?: string;
    Validators?: Validators[],
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
    this.Validators = []
  }
}
