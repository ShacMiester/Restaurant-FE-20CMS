import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveBlockComponent } from './descriptive-block.component';

describe('DescriptiveBlockComponent', () => {
  let component: DescriptiveBlockComponent;
  let fixture: ComponentFixture<DescriptiveBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptiveBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptiveBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
