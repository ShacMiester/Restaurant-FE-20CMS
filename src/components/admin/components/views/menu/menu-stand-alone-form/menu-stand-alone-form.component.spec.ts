import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStandAloneFormComponent } from './menu-stand-alone-form.component';

describe('MenuStandAloneFormComponent', () => {
  let component: MenuStandAloneFormComponent;
  let fixture: ComponentFixture<MenuStandAloneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStandAloneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStandAloneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
