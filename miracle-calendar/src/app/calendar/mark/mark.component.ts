import {Component, Input} from '@angular/core';
import {Note} from "../../shared/interfaces/note.interface";

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent {
  @Input() note: Note = {date: new Date(), title: '', toDo: '', id: 0};
}
