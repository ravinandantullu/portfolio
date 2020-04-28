import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildPracticeComponent } from './view-child-practice.component';

describe('ViewChildPracticeComponent', () => {
  let component: ViewChildPracticeComponent;
  let fixture: ComponentFixture<ViewChildPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
