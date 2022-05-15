import { TestBed } from '@angular/core/testing';

import { OptionsFormToBeRenamedService } from './options-form-to-be-renamed.service';

describe('OptionsFormToBeRenamedService', () => {
  let service: OptionsFormToBeRenamedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsFormToBeRenamedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
