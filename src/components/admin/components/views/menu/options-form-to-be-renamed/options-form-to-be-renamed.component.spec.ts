import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsFormToBeRenamedComponent } from './options-form-to-be-renamed.component';

describe('OptionsFormToBeRenamedComponent', () => {
  let component: OptionsFormToBeRenamedComponent;
  let fixture: ComponentFixture<OptionsFormToBeRenamedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsFormToBeRenamedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsFormToBeRenamedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
