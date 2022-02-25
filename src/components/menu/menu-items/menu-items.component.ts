import { ModalComponent } from './../../../shared/components/modal/modal.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  animal: string = '';
  name: string = '';
  public formFields: any[] = [
    {
      type: 'dropdown',
      name: 'extras',
      label: 'Rice Portion',
      value: '',
      required: true,
      options: [
        { key: '0', label: 'regular', },
        { key: '4', label: 'Large' }
      ]
    },
    // {
    //   type: 'radio',
    //   name: 'country',
    //   label: 'Country',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'm', label: 'Male' },
    //     { key: 'f', label: 'Female' }
    //   ]
    // },
    // {
    //   type: 'checkbox',
    //   name: 'hobby',
    //   label: 'Hobby',
    //   required: true,
    //   options: [
    //     { key: 'f', label: 'Fishing' },
    //     { key: 'c', label: 'Cooking' }
    //   ]
    // }
  ];
  someItems = [{name:'kebab',price:12}]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModal(item: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      // width: '250px',
      data: {item:item,form: this.formFields}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

