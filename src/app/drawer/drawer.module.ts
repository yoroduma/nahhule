import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    MatListModule,
  ]
})
export class DrawerModule { }
