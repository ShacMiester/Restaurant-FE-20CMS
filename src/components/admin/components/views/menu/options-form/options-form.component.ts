import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrls: ['./options-form.component.scss']
})
export class OptionsFormComponent implements OnInit, OnChanges {

  optionsForm: FormGroup = new FormGroup({});
  fieldTypes = ['Check box', 'Multi select', 'Single select']
  testingForm!: FormGroup
  @Input('menuID') id!: number
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.optionsForm = this.fb.group({
      options: this.fb.array([])
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes)
      console.log(changes)
    // this.optionsFormValue.emit(this.optionsForm.value)

  }

  options(): FormArray {
    return this.optionsForm.get('options') as FormArray;
  }

  newOption(): FormGroup {
    return this.fb.group({
      Menu_Item_ID: new FormControl(),
      type: new FormControl('', Validators.required),
      label: new FormControl('', Validators.required),
      RequiredLimit: new FormControl(),
      limit: new FormControl({ value: 0, disabled: true }),
      options: this.fb.array([])
    });
  }

  addOption() {
    this.options().push(this.newOption());
  }

  removeOption(empIndex: number) {
    this.options().removeAt(empIndex);
  }

  optionOptions(empIndex: number): FormArray {
    return this.options()
      .at(empIndex)
      .get('options') as FormArray;
  }

  newOptionOptions(): FormGroup {
    return this.fb.group({
      item: '',
      price: ''
    });
  }

  addOptionOptions(empIndex: number) {
    this.optionOptions(empIndex).push(this.newOptionOptions());
  }

  removeOptionOptions(empIndex: number, skillIndex: number) {
    this.optionOptions(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
  }
  nonTextOptions() {

  }
  fields: any = []
  hasLimitChanged($event: any, index: number) {
    if ($event.checked)
      this.options().controls[index].get('limit')?.enable()
    else
      this.options().controls[index].get('limit')?.disable()
    // console.log(this.optionsForm.controls['options'].controls)
    // this.optionsForm.controls['options'].
    // this.
    // if($event)
    // this.optionsForm.controls['limit'].enabled
  }
  limit: boolean = false
  typeChange(event: any, index: number) {
    switch (event) {
      case 'Multi select':
        this.limit = true;
        break;

      default:
        this.limit = false;
        break;
    }
    // this.options().insert(index, new FormControl('limit'))

  }
  optionsAvailable(optionIndex: number) {
    return this.options().controls[optionIndex].get('type')?.value != 'Multi select' && this.options().controls[optionIndex].get('type')?.value != 'Single select'
  }
}

