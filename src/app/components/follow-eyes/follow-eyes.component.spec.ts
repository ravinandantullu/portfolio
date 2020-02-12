import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowEyesComponent } from './follow-eyes.component';

describe('FollowEyesComponent', () => {
  let component: FollowEyesComponent;
  let fixture: ComponentFixture<FollowEyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowEyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowEyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
