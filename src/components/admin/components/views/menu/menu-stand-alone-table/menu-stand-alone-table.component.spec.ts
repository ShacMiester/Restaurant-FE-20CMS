import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStandALoneTableComponent } from './menu-stand-alone-table.component';

describe('MenuStandALoneTableComponent', () => {
  let component: MenuStandALoneTableComponent;
  let fixture: ComponentFixture<MenuStandALoneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStandALoneTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStandALoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
