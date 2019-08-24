import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientShowEffectComponent } from './gradient-show-effect.component';

describe('GradientShowEffectComponent', () => {
  let component: GradientShowEffectComponent;
  let fixture: ComponentFixture<GradientShowEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientShowEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientShowEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
