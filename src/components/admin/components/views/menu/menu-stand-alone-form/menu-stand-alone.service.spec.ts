import { TestBed } from '@angular/core/testing';

import { MenuStandAloneService } from './menu-stand-alone.service';

describe('MenuStandAloneService', () => {
  let service: MenuStandAloneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuStandAloneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
