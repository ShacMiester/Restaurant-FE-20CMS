import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { CrudService } from '../admin/services/crud.service';
import { CateringService } from './catering.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss'],
  providers: [MatSnackBar]
})
export class CateringComponent extends CrudService<any, number> implements OnInit {
  cateringForm$: Observable<FormBase<any>[]>;

  constructor(service: CateringService, protected override _http: HttpClient, private _snackBar: MatSnackBar) {
    super(_http, 'catering');
    this.cateringForm$ = service.getCateringForm();
  }
  ngOnInit(): void {
  }
  cater(event: any) {
    this.save(event.payload).subscribe({
      error: (err) => { this._snackBar.open('An error has occurred! please try again later', 'ok', { duration: 5000 }) },
      complete: () => { this._snackBar.open(`We received your message, we'll get back to you.`, 'ok', { duration: 5000 }) }
    })
  }

}
