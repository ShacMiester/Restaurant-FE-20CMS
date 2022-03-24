import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../atoms/form-base';
import { FieldControlService } from '../field-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FieldControlService]
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() formFields: FormBase<string>[] | null = [];
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() formValues: any = {};
  @Input() title!: string;
  @Input() disabled: boolean = false;
  @Input() type: string = 'add' || 'edit';
  @Input() editable: boolean = true;
  @Input() buttonTitle: string = 'Save';
  @Input() returnTo: any = undefined;

  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldControlService, private routerLink: Router) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.formFields as FormBase<string>[]);
    if (this.formValues)
      this.form.patchValue(this.formValues)
    this.disabled ? this.form.disable() : this.form.enable()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes)
      if (changes['formValues']?.currentValue != undefined)
        if (changes['formValues'].currentValue != changes['formValues'].previousValue)
          if (this.form)
            this.form.patchValue(changes['formValues'].currentValue)
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    const payload = this.form.value
    this.newItemEvent.emit({ payload: payload, type: this.type })
  }
  returnToPage() {
    this.routerLink.navigate(this.returnTo)
  }
}
