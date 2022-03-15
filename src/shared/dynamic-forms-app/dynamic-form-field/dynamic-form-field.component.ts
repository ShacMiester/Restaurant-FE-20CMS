import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../atoms/form-base';

@Component({
  selector: 'app-fields',
  templateUrl: './dynamic-form-field.component.html',
  styles: [`.mat-form-field-invalid{ color:#c7a166}; .mat-error{color:#c7a166} mat-hint{color:#c7a166}`]
})
export class DynamicFormFieldComponent implements OnInit {
  selectedDropDownOption: any
  @ViewChild("timepicker") timepicker: any;

  @Input() field!: FormBase<string>;
  @Input() form!: FormGroup;
  openFromIcon(timepicker: { open: () => void }) {
    timepicker.open();
  }
  get isValid() { return this.form.controls[this.field.key].valid }

  ngOnInit(): void {
    this.selectedDropDownOption = this.field.value
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 === c2 : false
  }
}
