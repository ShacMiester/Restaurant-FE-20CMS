import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemSpecialStandAloneFormComponent } from './menu-item-special-stand-alone-form.component';

describe('MenuItemSpecialStandAloneFormComponent', () => {
  let component: MenuItemSpecialStandAloneFormComponent;
  let fixture: ComponentFixture<MenuItemSpecialStandAloneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemSpecialStandAloneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemSpecialStandAloneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
