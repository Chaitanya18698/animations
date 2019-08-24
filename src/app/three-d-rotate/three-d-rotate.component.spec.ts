import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDRotateComponent } from './three-d-rotate.component';

describe('ThreeDRotateComponent', () => {
  let component: ThreeDRotateComponent;
  let fixture: ComponentFixture<ThreeDRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDRotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
