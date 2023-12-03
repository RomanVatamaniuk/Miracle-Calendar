import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";

const material = [
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [material]
})
export class MaterialModule { }
