import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../atoms/form-base';

@Component({
  selector: 'app-fields',
  templateUrl: './dynamic-form-field.component.html',
  styles:[`.mat-form-field-invalid{ color:#c7a166}; .mat-error{color:#c7a166} mat-hint{color:#c7a166} :host::ng-deep .mat-form-field-flex{    display: block;
    /* width: 100%; */
    /* height: calc(1.5em + .75rem + 3px); */
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #75787d;
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid #e0e0e0;
    border-radius: .35rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;}`]
})
export class DynamicFormFieldComponent {
  @Input() field!: FormBase<string>;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.field.key].valid }
}
