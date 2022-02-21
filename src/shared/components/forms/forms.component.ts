import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  unsubscribe: any
  @Input() title : string =''
  @Input() fields : any[] = []
  ngOnInit(): void {
this.form = new FormGroup({name:new FormControl(),age:new FormControl()})
  }

  getValues(event : any){
    console.log(event)
  }


  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubscribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e: any) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

}
