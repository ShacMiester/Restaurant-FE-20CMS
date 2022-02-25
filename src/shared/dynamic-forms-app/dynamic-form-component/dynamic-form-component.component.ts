import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../atoms/form-base';
import { FieldControlService } from '../field-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FieldControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.formFields as FormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
