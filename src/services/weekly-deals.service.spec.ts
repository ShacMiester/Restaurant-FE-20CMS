import { TestBed } from '@angular/core/testing';

import { WeeklyDealsService } from './weekly-deals.service';

describe('WeeklyDealsService', () => {
  let service: WeeklyDealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
