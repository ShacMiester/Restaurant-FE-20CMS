import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from 'src/shared/dynamic-forms-app/atoms/form-base';
import { CrudService } from '../admin/services/crud.service';
import { CateringService } from './catering.service';

import { SnackbarService } from 'src/shared/services/snackbar.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss'],
  providers: []
})
export class CateringComponent extends CrudService<any, number> implements OnInit {
  cateringForm$: Observable<FormBase<any>[]>;

  constructor(service: CateringService, protected override _http: HttpClient, private _snackBar: SnackbarService) {
    super(_http, 'catering');
    this.cateringForm$ = service.getCateringForm();
  }
  ngOnInit(): void {
  }
  cater(event: any) {
    this.save(event.payload).subscribe({
      error: (err) => { this._snackBar.error('An error has occurred! please try again later') },
      complete: () => { this._snackBar.success(`We received your message, we'll get back to you.`) }
    })
  }

}
