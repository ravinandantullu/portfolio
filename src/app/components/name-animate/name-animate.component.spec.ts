import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAnimateComponent } from './name-animate.component';

describe('NameAnimateComponent', () => {
  let component: NameAnimateComponent;
  let fixture: ComponentFixture<NameAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
