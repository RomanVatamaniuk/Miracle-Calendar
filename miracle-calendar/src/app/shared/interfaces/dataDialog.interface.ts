import {Note} from "./note.interface";

export interface DataDialog {
  date: Date;
  editMode: boolean;
  note?: Note;
}
