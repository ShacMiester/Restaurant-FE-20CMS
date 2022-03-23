import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTableComponent } from './carousel-table.component';

describe('CarouselTableComponent', () => {
  let component: CarouselTableComponent;
  let fixture: ComponentFixture<CarouselTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
