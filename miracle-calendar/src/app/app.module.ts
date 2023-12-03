import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {CalendarComponent} from "./calendar/calendar/calendar.component";
import { MonthItemsComponent } from './calendar/month-items/month-items.component';
import { DayItemsComponent } from './calendar/day-items/day-items.component';
import {SwitchMonthComponent} from "./calendar/switch-month/switch-month.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogComponent} from "./calendar/dialog/dialog.component";
import {MaterialModule} from "./material/material.module";
import { GetMonthNamePipe } from './Pipes/get-month-name.pipe';
import { GetDayNamePipe } from './Pipes/get-day-name.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MarkComponent } from './calendar/mark/mark.component';
import { ConfirmDialogComponent } from './calendar/confirm-dialog/confirm-dialog.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CalendarComponent,
        MonthItemsComponent,
        DayItemsComponent,
        SwitchMonthComponent,
        DialogComponent,
        GetMonthNamePipe,
        GetDayNamePipe,
        MarkComponent,
        ConfirmDialogComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
