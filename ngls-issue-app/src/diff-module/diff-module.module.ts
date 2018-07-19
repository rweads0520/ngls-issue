import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffModuleComponent } from './diff-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiffModuleComponent],
  exports: [DiffModuleComponent]
})
export class DiffModule { }
