
import { Subscription } from 'rxjs';
import { CrudService } from 'src/components/admin/services/crud.service';
import { CateringService } from './../../../../../catering/catering.service';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-catering-details',
  templateUrl: './catering-details.component.html',
  styleUrls: ['./catering-details.component.scss'],
})
export class CateringDetailsComponent
  extends CrudService<any, number>
  implements OnInit, OnDestroy
{
  cateringForm$: any;
  cateringFormValues: any;
  edit: boolean = false;
  subscriptions: Subscription = new Subscription();

  constructor(
    private CateringService: CateringService,
    protected override _http: HttpClient,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: SnackbarService
  ) {
    super(_http, 'catering');
  }
  ngOnInit(): void {
    this.subscriptions.add(this.getCateringForm());
  }
  getCateringForm() {
    this.CateringService.getCateringForm().subscribe({
      next: (v) => {
        this.cateringForm$ = v;
        this.subscriptions.add(
          this.CateringService.applyNewField().subscribe({
            next: (b) => (this.cateringForm$ = b),
            error: (err) => this._snackBar.error('An error has occurred'),
          })
        );
      },
      complete: () => {
        this.cateringFormValues = this.data.item;
      },
    });
  }
  cater(event: any) {
    this.subscriptions.add(
      this.update(event.payload, this.data.item.id).subscribe({
        next: (v) => this,
        error: (e) => console.log(e),
        complete: () => {
          this.dialogRef.close(true);
        },
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
