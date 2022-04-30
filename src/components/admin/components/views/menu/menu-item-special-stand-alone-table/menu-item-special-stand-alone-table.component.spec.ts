import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemSpecialStandAloneTableComponent } from './menu-item-special-stand-alone-table.component';

describe('MenuItemSpecialStandAloneTableComponent', () => {
  let component: MenuItemSpecialStandAloneTableComponent;
  let fixture: ComponentFixture<MenuItemSpecialStandAloneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemSpecialStandAloneTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemSpecialStandAloneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
