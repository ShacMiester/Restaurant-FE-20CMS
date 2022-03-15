import { CrudService } from 'src/components/admin/services/crud.service';
import { CateringService } from './../../../../../catering/catering.service';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-catering-details',
  templateUrl: './catering-details.component.html',
  styleUrls: ['./catering-details.component.scss']
})
export class CateringDetailsComponent extends CrudService<any, number> implements OnInit {
  cateringForm$: any
  cateringFormValues: any
  edit: boolean = false;

  constructor(private CateringService: CateringService, protected override _http: HttpClient, public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    super(_http, 'catering');
  }
  ngOnInit(): void {
    this.getCateringForm();
  }
  getCateringForm() {
    this.CateringService.getCateringForm().subscribe(
      {
        next: (v) => {
          this.cateringForm$ = v
          this.CateringService.applyNewField().subscribe({ next: (b) => this.cateringForm$ = b })
        },
        complete: () => {
          this.cateringFormValues = this.data.item
        }
      }
    )
  }
  cater(event: any) {
    this.update(event.payload, this.data.item.id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => { this.dialogRef.close(true) }
    })
  }
}
