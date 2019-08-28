import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesAnimationComponent } from './leaves-animation.component';

describe('LeavesAnimationComponent', () => {
  let component: LeavesAnimationComponent;
  let fixture: ComponentFixture<LeavesAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
