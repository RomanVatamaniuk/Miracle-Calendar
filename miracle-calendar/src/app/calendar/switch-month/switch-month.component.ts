import { Component } from '@angular/core';
import {CalendarService} from "../../shared/services/calendar.service";

@Component({
  selector: 'app-switch-month',
  templateUrl: './switch-month.component.html',
  styleUrls: ['./switch-month.component.css']
})
export class SwitchMonthComponent {
  currentMonth: Date = new Date();
  constructor(private calendarService: CalendarService) {}

  prevMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.calendarService.updateMonth(this.currentMonth);
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.calendarService.updateMonth(this.currentMonth);
  }

  showMonth(month: Date): string {
    switch (month.getMonth()) {
      case 0:
        return 'January';
        break;
      case 1:
        return 'February';
        break;
      case 2:
        return 'March';
        break;
      case 3:
        return 'April';
        break;
      case 4:
        return 'May';
        break;
      case 5:
        return 'June';
        break;
      case 6:
        return 'July';
        break;
      case 7:
        return 'August';
        break;
      case 8:
        return 'September';
        break;
      case 9:
        return 'October';
        break;
      case 10:
        return 'November';
        break
      case 11:
        return 'December';
        break;
    }
    return '';
  }
}

