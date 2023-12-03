import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Note} from "../interfaces/note.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private dataSubject = new BehaviorSubject<Date>(new Date());
  private notesSubject = new BehaviorSubject<Note[]>([]);
  notes$ = this.notesSubject.asObservable();
  month$ = this.dataSubject.asObservable();
  url: string = 'http://localhost:3000/notes'

  constructor(private http: HttpClient) {
    this.updateNote();
  }

  updateMonth(newData: any) {
    this.dataSubject.next(newData);
  }

  saveNote(note: any) {
    this.updateNote();
    return this.http.post(this.url, note)
  }

  getNote(): Observable<Note[]> {
     return this.http.get<Note[]>(this.url)
  }

  updateNote() {
    this.getNote().subscribe(data => {
      this.notesSubject.next(data);
    })
  }

  deleteNote(id: number) {
    this.updateNote()
    return this.http.delete(`http://localhost:3000/notes/${id}`)
  }

  editNote(id: number, note: Note) {
    this.updateNote()
    return this.http.put(`http://localhost:3000/notes/${id}`, note);
  }
}
