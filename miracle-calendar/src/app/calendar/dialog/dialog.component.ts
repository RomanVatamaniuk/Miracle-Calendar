import {Component, Inject, TemplateRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CalendarService} from "../../shared/services/calendar.service";
import {Subscription} from "rxjs";
import {DialogFormService} from "../../shared/services/dialog-form.service";
import {Note} from "../../shared/interfaces/note.interface";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  saveNoteSubscribtion: Subscription = new Subscription();
  editNoteSubscribtion: Subscription = new Subscription();
  dialogForm: FormGroup = new FormGroup([]);

  get title() {
    return this.dialogForm.get('title');
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: {date: Date, note: Note, editMode: boolean},
              private dialogRef: MatDialogRef<DialogComponent>,
              private calendarService: CalendarService,
              private fb: FormBuilder,
              private formsService: DialogFormService,
              public dialog: MatDialog

  ) {
    this.dialogForm = this.formsService.buildForm(this.data.date);
    if(this.data.editMode) {
      this.dialogForm.setValue({
        date: this.data.date,
        title: this.data.note.title,
        toDo: this.data.note.toDo
      });
    }
  }

  sendForm() {
    this.saveNoteSubscribtion = this.calendarService.saveNote(this.dialogForm.value).subscribe();
    this.calendarService.updateNote();
  }

  deleteNote(id: number) {
    this.dialog.open(ConfirmDialogComponent, {data: id});
  }

  editNote(id: number) {
      this.editNoteSubscribtion = this.calendarService.editNote(id, this.dialogForm.value).subscribe();
      this.calendarService.updateNote();
      this.dialogRef.close();
  }

  onEnterKeyPress($event: any) {
      if($event.key === 'Enter') {
        if (this.data.editMode) {
          this.editNote(this.data.note.id)
        }
      }
    console.log($event);
  }

  ngOnDestroy() {
    this.saveNoteSubscribtion.unsubscribe();
    this.editNoteSubscribtion.unsubscribe();
  }
}
