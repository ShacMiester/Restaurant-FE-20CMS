import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'textbox',
  template: `
    <form [formGroup]="form">
    <mat-form-field class="w-100" appearance="fill" [floatLabel]="'auto'">
      <mat-label>{{field.label}}</mat-label>
      <input matInput [placeholder]="field.placeHolder" [formControlName]="field.name" [name]="field.name" [id]="field.name" [attr.type]="field.type">
      <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
        rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
    </mat-form-field>
  </form>
    `
})
export class TextBoxComponent {
  @Input() field: any = {};
  @Input() form !: FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() {

  }
}
