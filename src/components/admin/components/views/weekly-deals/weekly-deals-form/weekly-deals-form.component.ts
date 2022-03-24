import { WeeklyDealsService } from './../../../../../../services/weekly-deals.service';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-deals-form',
  templateUrl: './weekly-deals-form.component.html',
  styleUrls: ['./weekly-deals-form.component.scss']
})
export class WeeklyDealsFormComponent extends CrudService<any, number> implements OnInit {
  weeklyDealsForm$: any
  constructor(protected override _http: HttpClient, private WeeklyDealsService: WeeklyDealsService) {
    super(_http, 'weekly-deals');
  }

  ngOnInit() {
    this.weeklyDealsForm$ = this.WeeklyDealsService.getWeeklyDealsForm()
  }
}
