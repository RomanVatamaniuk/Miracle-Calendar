import {Component} from '@angular/core';
import {CalendarService} from "../../shared/services/calendar.service";
import {Subscription} from "rxjs";
import {Note} from "../../shared/interfaces/note.interface";
import {DialogService} from "../../shared/services/dialog.service";

@Component({
  selector: 'app-month-items',
  templateUrl: './month-items.component.html',
  styleUrls: ['./month-items.component.css']
})
export class MonthItemsComponent {
  currentMonth: Date = new Date();
  daysInMonth: Array<{ date: Date }> = [];
  getMonthSubscribtion$: Subscription;
  daysOfWeek: string[] = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  notes: Note[] = [];
  getNoteSubscribtion: Subscription;

  calendarMatrix: number[][] = [];

  constructor(private calendarService: CalendarService, private dialog: DialogService) {
    this.getMonthSubscribtion$ = this.calendarService.month$.subscribe(data => {
      this.currentMonth = data;
      this.deleteCalendar();
      this.createCalendar();
    });
    this.getNoteSubscribtion = this.calendarService.notes$.subscribe(note => {
      this.notes = note.map(item => {
        return {
          ...item,
          date: new Date(item.date)
        }
      })
    })
    this.calendarService.updateNote();
  }

  deleteCalendar() {
    this.calendarMatrix = [[]];
  }

  createCalendar() {
    let counter = 0;
    const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const amountOfDays = this.daysOfWeek.indexOf(firstDay.toString().split(' ')[0]);
    const columnsAmount = amountOfDays > 5? 6: 5;
    for (let i = 0; i<= columnsAmount; i++) {
      this.calendarMatrix.push([]);
      for (let j = 1; j <= 7; j++) {
        if (counter < lastDay.getDate() && j + 7 * i > amountOfDays) {
          counter++;
          this.calendarMatrix[i].push(counter);
        } else {
          this.calendarMatrix[i].push(0)
        }
      }
    }
  }

  openDialog(day: number, $event: Event) {
    if(day !== 0) {
      if (($event.target as HTMLTextAreaElement).className !== "note-body") {
        this.dialog.openDialog({date: new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), day), editMode: false});
      }
    }
  }

  ngOnDestroy() {
    this.getMonthSubscribtion$.unsubscribe();
    this.getNoteSubscribtion.unsubscribe();
  }
}
