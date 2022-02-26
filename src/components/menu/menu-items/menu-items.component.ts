import { MenuItemsService } from './menu-items.service';
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
  public formFields: any;

  someItems = [{name:'kebab',price:12}]
  constructor(public dialog: MatDialog,public form:MenuItemsService) {
    this.formFields = form.getSpecificItemForm()
   }

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

