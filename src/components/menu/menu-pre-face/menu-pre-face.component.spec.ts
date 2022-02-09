import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPreFaceComponent } from './menu-pre-face.component';

describe('MenuPreFaceComponent', () => {
  let component: MenuPreFaceComponent;
  let fixture: ComponentFixture<MenuPreFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPreFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPreFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
