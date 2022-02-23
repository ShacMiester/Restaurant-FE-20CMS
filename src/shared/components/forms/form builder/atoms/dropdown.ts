import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown',
  template: `
      <div [formGroup]="form">
        <select class="form-control" [id]="field.name" [formControlName]="field.name">
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</option>
        </select>
      </div>
      <mat-form-field appearance="fill">
  <mat-label>Favorite food</mat-label>
  <mat-select>
    <mat-option *ngFor="let opt of field.options" [value]="opt.key">
      {{opt.label}}
    </mat-option>
  </mat-select>
</mat-form-field>
    `
})
export class DropDownComponent {
  @Input() field: any = {};
  @Input() form !: FormGroup;

  constructor() {

  }
}
