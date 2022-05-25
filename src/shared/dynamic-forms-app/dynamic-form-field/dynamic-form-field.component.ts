import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../atoms/form-base';

@Component({
  selector: 'app-fields',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.css']
})
export class DynamicFormFieldComponent implements OnInit, OnChanges {
  selectedDropDownOption: any
  @ViewChild("timepicker") timepicker: any;
  @Input() image: any
  preview!: string;
  @Input() field!: FormBase<string>;
  @Input() form!: FormGroup;
  environmentImageEndPoint = `${environment.store}Uploads/`
  openFromIcon(timepicker: { open: () => void }) {
    timepicker.open();
  }
  selectedStates: any = []
  env = `${environment.store}Uploads/`
  constructor(private http: HttpClient) { }
  get isValid() { return this.form.controls[this.field.key].valid }

  ngOnInit(): void {
    if (this.field.hasOwnProperty('options'))
      this.selectedStates = this.field.options?.length ? this.field.options : null
    this.selectedDropDownOption = this.field.value
  }
  onKey(value) {
    if (this.selectedStates != null)
      this.selectedStates = this.search(value);
  }
  search(value: string) {
    let filter = value.toLowerCase();
    return this.field.options.filter(option =>
      option.key.toLowerCase().startsWith(filter));
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes != null && changes['form']?.currentValue != undefined)
      if (changes['form'].currentValue?.controls != null)
        Object.keys(changes['form'].currentValue.controls).map(keys => {
          if (keys.includes('image')) {
            this.form.controls[this.field.key].patchValue(changes['form'].currentValue.controls[keys].value)
            this.preview = changes['form'].currentValue.controls[keys].value
          }
        })
    if (this.field.key.toLocaleLowerCase().includes('image'))
      this.preview = this.form.controls[this.field.key].value
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 === c2 : false
  }

  uploadFile(event: any) {
    this.form.get('imageURL')?.updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      this.image = reader.result as string;
    }
    let formData = new FormData()
    formData.append('file', event.target.files[0])
    reader.readAsDataURL((event.target as HTMLInputElement).files[0])
    this.http.post(environment.imagesAPI, formData).subscribe(
      (res: any) => {
        this.form.controls['imageURL'].patchValue(`${environment.store}Uploads/`+res.image)
        this.image = `${environment.store}Uploads/`+res.image
        this.preview = `${environment.store}Uploads/`+res.image
      }
    )
  }

  removeImage() {
    this.image = ''
    this.form.controls['imageURL'].reset()
  }
}
