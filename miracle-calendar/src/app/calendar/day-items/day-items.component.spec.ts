import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayItemsComponent } from './day-items.component';

describe('DayItemsComponent', () => {
  let component: DayItemsComponent;
  let fixture: ComponentFixture<DayItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayItemsComponent]
    });
    fixture = TestBed.createComponent(DayItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
