import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseEffectComponent } from './pulse-effect.component';

describe('PulseEffectComponent', () => {
  let component: PulseEffectComponent;
  let fixture: ComponentFixture<PulseEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
