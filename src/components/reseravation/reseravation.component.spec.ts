import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseravationComponent } from './reseravation.component';

describe('ReseravationComponent', () => {
  let component: ReseravationComponent;
  let fixture: ComponentFixture<ReseravationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseravationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseravationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
