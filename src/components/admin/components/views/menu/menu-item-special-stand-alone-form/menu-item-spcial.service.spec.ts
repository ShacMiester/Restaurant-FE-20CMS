import { TestBed } from '@angular/core/testing';

import { MenuItemSpcialService } from './menu-item-spcial.service';

describe('MenuItemSpcialService', () => {
  let service: MenuItemSpcialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemSpcialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
