import { TestBed } from '@angular/core/testing';

import { DomHelperService } from './dom-helper.service';

describe('DomHelperService', () => {
  let service: DomHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
