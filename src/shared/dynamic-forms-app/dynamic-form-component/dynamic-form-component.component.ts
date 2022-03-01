import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
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
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() formValues: any = {}
  @Input() title!: string

  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.formFields as FormBase<string>[]);
    if(this.formValues)
    this.form.patchValue(this.formValues)
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    const payload = this.form.value
    console.log(payload,'gge')
    this.newItemEvent.emit(this.payLoad)
  }
  emitEvent(){
    const payload = JSON.stringify(this.form.getRawValue());
    this.newItemEvent.emit(payload)
  }
}
