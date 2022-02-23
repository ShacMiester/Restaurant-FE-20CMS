import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridistComponent } from './gridist.component';

describe('GridistComponent', () => {
  let component: GridistComponent;
  let fixture: ComponentFixture<GridistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
