import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPreFaceComponent } from './story-pre-face.component';

describe('StoryPreFaceComponent', () => {
  let component: StoryPreFaceComponent;
  let fixture: ComponentFixture<StoryPreFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryPreFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPreFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
