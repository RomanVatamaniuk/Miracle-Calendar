import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {CalendarService} from "../../shared/services/calendar.service";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  deleteNoteSubscribtion: Subscription = new Subscription();


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private calendarService: CalendarService,
  ) {
  }

  delete(id: number) {
    this.deleteNoteSubscribtion = this.calendarService.deleteNote(id).subscribe();
    this.dialogRef.close();
    this.calendarService.updateNote();
  }

  ngOnDestroy() {
    this.deleteNoteSubscribtion.unsubscribe();
  }
}
