import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {CalendarService} from "../../shared/services/calendar.service";
import {Note} from "../../shared/interfaces/note.interface";
import {Subscription} from "rxjs";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogService} from "../../shared/services/dialog.service";

@Component({
  selector: 'app-day-items',
  templateUrl: './day-items.component.html',
  styleUrls: ['./day-items.component.css']
})
export class DayItemsComponent {
  @Input() day: number = 0;
  @Input() currentMonth: Date = new Date();

  currentDate: Date = new Date();
  @Input() notes: Note[] = [];

  constructor(private dialog: DialogService) {
    this.notes = [];
  }

  editMark(note: Note, $event: Event) {
    if (($event.target as HTMLTextAreaElement).className === "note-body") {
      this.dialog.openDialog({date: note.date, editMode: true, note: note})
    }
  }
}
