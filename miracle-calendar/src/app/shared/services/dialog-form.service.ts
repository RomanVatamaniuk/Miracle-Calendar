import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DialogFormService {

  constructor(private fb: FormBuilder) { }

  buildForm(date: Date) {
    return this.fb.group({
      date: date,
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      toDo: [''],
    });
  }
}
