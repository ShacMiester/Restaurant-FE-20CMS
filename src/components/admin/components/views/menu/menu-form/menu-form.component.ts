import { map } from 'rxjs';
import { environment } from './../../../../../../environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'
import { MenuFormService } from './../services/menu-form.service'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MenuService } from './../services/menu.service'
import { CrudService } from 'src/components/admin/services/crud.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
enum Days {
  Monday = 1 << 0,
  Tuesday = 1 << 1,
  Wednesday = 1 << 2,
  Thursday = 1 << 3,
  Friday = 1 << 4,
  Saturday = 1 << 5,
  Sunday = 1 << 6,
}
@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styles: [`.mat-stepper-horizontal {
    margin-top: 8px;
  }

  .mat-form-field {
    margin-top: 16px;
  }`],
  providers: [MenuFormService],
  styleUrls: ['./menu-form.component.scss']

})
export class MenuFormComponent extends CrudService<any, number> implements OnInit {
  selectedDropDownOption: any
  @ViewChild("timepicker") timepicker: any;
  dayOptions = Object.keys(Days)
    .filter(Number)
    .map(key => ({
      key,
      label: Days[key]
    }));

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
  ) { super(_http, 'menuItems/addWithOptions'); }
  otherForms!: any

  ngOnInit(): void {
    this.menuForm = this.constructMenuForm()
    // this.constructMenuForm()
    this.getQueryParams();
    this.getMenuItems();
    this.getCategories()
  }

  getMenuItems() {
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
      this._http.get(environment.storeApi+'/menuItems/'+params.id).subscribe(menuItem=>{
        console.log(menuItem)
        if(menuItem['type'])
        this.constructSpecialItemForm()
        this.menuForm.patchValue(menuItem)
      })
      this.findOne(params.id).subscribe(item => {
        console.log(item)
        this.menuForm.patchValue(item)
        this.Menu_ItemSpecialForm.patchValue(item.itemSpecial)
      })
      // this.menuService.getMenuItems().subscribe(items => {
      //   items.map((item: any) => {
      //     if (item.id == params.id) this.formValues = item
      //   })
      // })
    })
  }

  spicIalTypes = [
    { value: 0, label: 'Day' },
    { value: 1, label: 'Day_Time' },
    { value: 2, label: 'Interval' }
  ]
  days: any = [
    {
      day: 'Monday',
      value: 1
    },
    {
      day: 'Tuesday',
      value: 2
    },
    {
      day: 'Wednesday',
      value: 4
    },
    {
      day: 'Thursday',
      value: 8
    },
    {
      day: 'Friday',
      value: 16
    },
    {
      day: 'Saturday',
      value: 32
    },
    {
      day: 'Sunday',
      value: 64
    }
  ]
  doSomething($event: any) {
    this.initSpecialItemForm()
    this.Menu_ItemSpecialForm.controls['type'].patchValue($event)
    switch ($event) {
      case 'Day':
        this.Menu_ItemSpecialForm.addControl('days', new FormControl(0))
        break;
      case 'Day_Time':
        this.Menu_ItemSpecialForm.addControl('timeFromHour', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('timeToHour', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('days', new FormControl('', []))
        break;
      case 'Interval':
        this.Menu_ItemSpecialForm.addControl('intervalFrom', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('intervalTo', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('timeFromHour', new FormControl(''))
        this.Menu_ItemSpecialForm.addControl('timeToHour', new FormControl(''))
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
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      imageURL: new FormControl(),
      price: new FormControl(''),
      suggestAtCheckout: new FormControl(false),
      isTemporarilyUnavailable: new FormControl(false),
      categoryId: new FormControl(),
      itemSpecial: new FormControl(false)
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
      // Menu_Item_ID: new FormControl(),
      type: new FormControl(''),
    })
  }
  callingFunction() {
  }
  // doSomething(){}
  getCategories() {
    this._http.get(environment.storeApi + '/menuCategories').subscribe(categories => {
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
  menuFormSubmitting(optionsForm) {
    this.menuID = 1
    // this.Menu_ItemSpecialForm.controls['day'].value ?this.Menu_ItemSpecialForm.controls['day'].setValue([this.Menu_ItemSpecialForm?.controls['day']?.value.reduce((a, b) => a + b, 0)]) : 0
    this.menuForm.controls['itemSpecial'].setValue(this.Menu_ItemSpecialForm.value)
    let menuForm = Object.assign({}, this.menuForm.value)
    menuForm['itemSpecial'].days = this.Menu_ItemSpecialForm?.controls['days']?.value.reduce((a, b) => a + b, 0)
    menuForm['itemSpecial'].type == 'Day' ? menuForm['itemSpecial'].type = 0 : menuForm['itemSpecial'].type == 'Day_Time' ? menuForm['itemSpecial'].type = 1 : menuForm['itemSpecial'].type == 'Interval' ? menuForm['itemSpecial'].type = 2 : menuForm['itemSpecial'].type = 0
    menuForm['itemOptionCategories'] = optionsForm.itemOptions
    // menuForm['itemOptionCategories']= []
    this.testSomething(menuForm)
    this.save(menuForm).subscribe()
    // this.save(Object.assign(this.menuForm.value,))
  }
  addNewControl() {
    this.menuFormOptions.push(new FormGroup({ 'isRequired': new FormControl('') }))
  }
  preview
  image: any = ''
  uploadFile(event: any) {

    this.menuForm.get('imageURL')?.updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      this.image = reader.result as string;
    }
    let formData = new FormData()
    formData.append('file', event.target.files[0])
    reader.readAsDataURL((event.target as HTMLInputElement).files[0])
    this._http.post(environment.imagesAPI, formData).subscribe(
      res => {
        this.menuForm.controls['imageURL'].patchValue(JSON.stringify(res['image']))
      }
    )
  }

  removeImage() {
    this.image = ''
    this.menuForm.controls['imageURL'].reset()
  }

  testSomething(menuForm) {
  }
}

function bitToFormValue(enumeration: object, bit: number) {
  const bits = enumToBitValues(enumeration);
  return bits.map(b => (bit & b) === b);
}

function enumToBitValues(enumeration: object) {
  return Object.keys(enumeration)
    .map(Number)
    .filter(Boolean);
}

