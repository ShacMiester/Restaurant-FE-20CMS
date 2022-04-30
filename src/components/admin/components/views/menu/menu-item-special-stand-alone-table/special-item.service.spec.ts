import { TestBed } from '@angular/core/testing';

import { SpecialItemService } from './special-item.service';

describe('SpecialItemService', () => {
  let service: SpecialItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
