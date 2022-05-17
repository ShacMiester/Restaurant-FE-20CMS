import { Component, OnInit } from '@angular/core';
import { WorkingHoursService } from '../working-hours.service';

@Component({
  selector: 'app-working-hours-form',
  templateUrl: './working-hours-form.component.html',
  styleUrls: ['./working-hours-form.component.scss']
})
export class WorkingHoursFormComponent implements OnInit {
  form$: any;
  type: string = 'add';

  constructor(
    private _workingHoursService: WorkingHoursService
  ) { }

  ngOnInit(): void {
    this.getWorkingHoursForm();
  }
  getWorkingHoursForm() {
    this._workingHoursService.getWorkingHoursForm().subscribe(items => {
      this.form$ = items
    })
  }
}
