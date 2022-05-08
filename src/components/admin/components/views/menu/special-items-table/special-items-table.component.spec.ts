import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialItemsTableComponent } from './special-items-table.component';

describe('SpecialItemsTableComponent', () => {
  let component: SpecialItemsTableComponent;
  let fixture: ComponentFixture<SpecialItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialItemsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
