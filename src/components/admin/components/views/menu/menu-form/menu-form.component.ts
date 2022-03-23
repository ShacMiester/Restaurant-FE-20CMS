import { environment } from './../../../../../../environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'
import { MenuFormService } from './../services/menu-form.service'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MenuService } from './../services/menu.service'
import { CrudService } from 'src/components/admin/services/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styles: [`.mat-stepper-horizontal {
    margin-top: 8px;
  }

  .mat-form-field {
    margin-top: 16px;
  }`],
  providers: [MenuFormService]
  // styleUrls: ['./menu-form.component.scss']

})
export class MenuFormComponent extends CrudService<any, number> implements OnInit {
  selectedDropDownOption: any
  @ViewChild("timepicker") timepicker: any;

  openFromIcon(timepicker: { open: () => void }) {
    timepicker.open();
  }
  form$: any
  formValues: any
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  specialDayActivated: boolean = false;
  menuID!: number

  constructor(
    private menuFormService: MenuFormService,
    private router: ActivatedRoute,
    private route: Router,
    private menuService: MenuService,
    protected override _http: HttpClient,
    private MatSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private formBuilder: FormBuilder
  ) { super(_http, 'menuItems'); }
  otherForms!: any

  ngOnInit(): void {
    this.menuForm = this.constructMenuForm()
    this.constructMenuForm()
    this.getQueryParams();
    this.getMenuItems();
    this.getCategories()
  }

  getMenuItems() {
    // this.findAll().subscribe(items => { })
    //crud operations to be used
    this.menuFormService.getMenuItemForm().subscribe(items => {
      this.form$ = items
    })
  }

  saveMenuItem($event: any) {
    this.save($event.payload).subscribe({
      error: (error) => { this.MatSnackBar.open('An error has occurred', 'ok') },
      complete: () => {
        this.MatSnackBar.open('Item was added successfully', 'ok')
        this.route.navigate(['/menu-items'])
      }
    })
  }

  getQueryParams() {
    this.router.queryParams.subscribe((params: any) => {
      this.menuService.getMenuItems().subscribe(items => {
        items.map((item: any) => {
          if (item.id == params.id) this.formValues = item
        })
      })
    })
  }

  spicIalTypes = [
    { value: 0, label: 'Entire Day/s' },
    { value: 1, label: 'Specific hour/s' },
    { value: 2, label: 'Only for this day' },
    { value: 3, label: 'Specific date/s' }
  ]
  days: any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  doSomething($event: any) {
    this.initSpecialItemForm()
    this.Menu_ItemSpecialForm.controls['Special_Type'].patchValue($event)
    switch ($event) {
      case 'Entire Day/s':
        this.Menu_ItemSpecialForm.addControl('Days', new FormControl('', []))
        break;
      case 'Specific hour/s':
        this.Menu_ItemSpecialForm.addControl('From_Hours', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('To_Hours', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('Days', new FormControl('', []))
        break;
      case 'Only for this day':
        this.Menu_ItemSpecialForm.addControl('Days', new FormControl({ value: [this.days[new Date().getDay()]], disabled: true }))
        this.Menu_ItemSpecialForm.addControl('From_Hours', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('To_Hours', new FormControl(''))
        break;
      case 'Specific date/s':
        this.Menu_ItemSpecialForm.addControl('from_date', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('to_date', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('From_Hours', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('To_Hours', new FormControl(''))
        break;
      default:
        break;
    }
  }
  submitSpecialForm() {
  }
  categories: any = []
  menuForm!: FormGroup
  Menu_ItemSpecialForm: FormGroup = new FormGroup({});
  initSpecialItemForm() {
    this.Menu_ItemSpecialForm = this.constructSpecialItemForm()
  }
  constructMenuForm() {
    return new FormGroup({
      Name: new FormControl('', Validators.required),
      Description: new FormControl(''),
      Price: new FormControl(''),
      Menu_Item_Category: new FormControl(),
      Image_URL: new FormControl(),
      Is_Temporarily_Unavailable: new FormControl(false),
      Is_Special: new FormControl(false)
    });
  }
  specialActivated(event: boolean) {
    switch (event) {
      case true:
        this.Menu_ItemSpecialForm.enable()
        this.Menu_ItemSpecialForm = this.constructSpecialItemForm()
        this.Menu_ItemSpecialForm.setParent(this.menuForm)
        break;

      default:
        this.Menu_ItemSpecialForm.reset()
        this.Menu_ItemSpecialForm.disable()
        break;
    }

  }
  constructSpecialItemForm(values: any = {}) {
    return new FormGroup({
      Menu_Item_ID: new FormControl(),
      Special_Type: new FormControl(),
    })
  }
  callingFunction() {
    console.log(this.menuForm)
  }
  // doSomething(){}
  getCategories() {
    this._http.get(environment.storeApi + 'menuCategories').subscribe(categories => {
      this.categories = categories
    })
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.menuForm.controls['Image_URL'].setValue(e.target.result)
      };

      // reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  submitOptions(event: any) {
    console.log('emitted obj =>', event)
  }

  menuFormOptions!: FormArray
  initMenuFormOptions() {
    this.menuFormOptions = new FormArray([])
    // this.menuFormOptions = new FormGroup({
    //   label: new FormControl('', Validators.required),
    //   key: new FormControl(''),
    //   type: new FormControl(''),
    //   options:new FormArray([])
    // })
  }
  menuFormSubmitting() {
    console.log(this.menuForm.value)
    console.log(this.Menu_ItemSpecialForm.value)
    this.menuID = 1
    // console.log(this.menuForm.value)
  }
  addNewControl() {
    this.menuFormOptions.push(new FormGroup({ 'type': new FormControl('') }))
  }

}
