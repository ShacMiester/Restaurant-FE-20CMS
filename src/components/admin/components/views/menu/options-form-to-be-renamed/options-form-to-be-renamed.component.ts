import { environment } from './../../../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-options-form-to-be-renamed',
  templateUrl: './options-form-to-be-renamed.component.html',
  styleUrls: ['./options-form-to-be-renamed.component.scss']
})
export class OptionsFormToBeRenamedComponent extends CrudService<any, number> implements OnInit, OnChanges {

  optionsForm: FormGroup = new FormGroup({});
  fieldTypes = ['Check box', 'Multi select', 'Single select']
  testingForm!: FormGroup
  type: 'add' | 'edit';
  paramID: number = 0;
  @Input('menuID') id!: number
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>()
  constructor(private fb: FormBuilder, protected override _http: HttpClient, private MatDialog: MatDialog, private router: ActivatedRoute,) {
    super(_http, 'MenuItems/CreateCategoryWithOptions');
  }

  ngOnInit() {
    this.constructForm();
    this.getFormValues()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes)
      console.log(changes)
    // this.optionsFormValue.emit(this.optionsForm.value)

  }

  getFormValues() {
    this.router.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.paramID = params.id
        this.type = 'edit';
        this._http.get(environment.storeApi + '/MenuItemOptionCategories/getByItemId?id=' + params.id).subscribe((options: any) => {
          if (options) {
            options.map((opt, index) => {
              opt['itemId'] = params.id
              this.addOption(opt)
              opt.itemOptions.map(o => {
                this.addOptionOptions(index, o)
                this.optionsForm.patchValue(opt)
              })
            })
          }
          this.optionsForm.patchValue(options)
        })
      }
      else {
        this.type = 'add';
      }
    })
  }

  constructForm() {
    this.optionsForm = this.fb.group({
      itemOptions: this.fb.array([])
    });
  }
  options(): FormArray {
    return this.optionsForm.get('itemOptions') as FormArray;
  }

  newOption(obj: any = { name: '', min: 0, max: 0, itemId: this.paramID || 0 }): FormGroup {
    return this.fb.group({
      itemId: new FormControl(this.paramID),
      name: new FormControl(obj.name, Validators.required),
      min: new FormControl(obj.min),
      max: new FormControl(obj.max),
      itemOptions: this.fb.array([])
    });
  }

  addOption(opt = {}) {
    this.options().push(this.newOption(opt));
  }

  removeOption(empIndex: number) {
    this.options().removeAt(empIndex);
  }

  optionOptions(empIndex: number): FormArray {
    return this.options()
      .at(empIndex)
      .get('itemOptions') as FormArray;
  }

  newOptionOptions(obj: any = {}): FormGroup {
    return this.fb.group({
      name: obj.name || '',
      description: obj.description || '',
      imageURL: obj.imageURL || '',
      addtionalPrice: obj.addtionalPrice || ''
    });
  }

  addOptionOptions(empIndex: number, o) {
    this.optionOptions(empIndex).push(this.newOptionOptions(o));
  }

  removeOptionOptions(empIndex: number, skillIndex: number) {
    this.optionOptions(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.optionsForm.value)
    switch (this.type) {
      case 'add':
        this.save(this.optionsForm.value).subscribe()
        break;
      case 'edit':
        this.save(this.optionsForm.value).subscribe()
        break;
      default:
        break;
    }
    // this.formValue.emit(this.optionsForm.value)
  }
  nonTextOptions() {

  }
  fields: any = []
  hasLimitChanged($event: any, index: number) {
    // console.log($event)
    // if ($event.checked)
    //   this.options().controls[index].get('limit')?.enable()
    // else
    //   this.options().controls[index].get('limit')?.disable()
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
    // return this.options().controls[optionIndex].get('type')?.value != 'Multi select' && this.options().controls[optionIndex].get('type')?.value != 'Single select'
  }
}
