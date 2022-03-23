import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstScreenComponent } from './first-screen.component';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';

@NgModule({
  declarations: [
    FirstScreenComponent,
    MenuHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FirstScreenComponent]
})
export class FirstScreenModule { }
