import { Injectable } from '@angular/core';
import {DialogComponent} from "../../calendar/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DataDialog} from "../interfaces/dataDialog.interface";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(data: DataDialog) {
    this.dialog.open(DialogComponent, {data: data});
  }
}
