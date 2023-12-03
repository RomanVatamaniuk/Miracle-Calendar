import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthItemsComponent } from './month-items.component';

describe('MonthItemsComponent', () => {
  let component: MonthItemsComponent;
  let fixture: ComponentFixture<MonthItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthItemsComponent]
    });
    fixture = TestBed.createComponent(MonthItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
