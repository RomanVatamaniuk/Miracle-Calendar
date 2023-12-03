import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMonthComponent } from './switch-month.component';

describe('SwitchMonthComponent', () => {
  let component: SwitchMonthComponent;
  let fixture: ComponentFixture<SwitchMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchMonthComponent]
    });
    fixture = TestBed.createComponent(SwitchMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
