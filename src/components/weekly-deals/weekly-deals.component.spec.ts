import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDealsComponent } from './weekly-deals.component';

describe('WeeklyDealsComponent', () => {
  let component: WeeklyDealsComponent;
  let fixture: ComponentFixture<WeeklyDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
