import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringTableComponent } from './catering-table.component';

describe('CateringTableComponent', () => {
  let component: CateringTableComponent;
  let fixture: ComponentFixture<CateringTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateringTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
