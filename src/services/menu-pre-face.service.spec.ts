import { TestBed } from '@angular/core/testing';

import { MenuPreFaceService } from './menu-pre-face.service';

describe('MenuPreFaceService', () => {
  let service: MenuPreFaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPreFaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
