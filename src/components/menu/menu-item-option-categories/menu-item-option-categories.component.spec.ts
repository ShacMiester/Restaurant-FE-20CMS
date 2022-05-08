import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemOptionCategoriesComponent } from './menu-item-option-categories.component';

describe('MenuItemOptionCategoriesComponent', () => {
  let component: MenuItemOptionCategoriesComponent;
  let fixture: ComponentFixture<MenuItemOptionCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemOptionCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemOptionCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
