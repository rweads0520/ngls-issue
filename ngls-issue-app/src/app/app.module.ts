import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SameModuleComponent } from './same-module.component';
import { DiffModule } from '../diff-module/diff-module.module';
import { SharedLibModule } from 'shared-lib';
import { ExtLibModule } from 'ext-lib';

@NgModule({
  declarations: [
    AppComponent,
    SameModuleComponent
  ],
  imports: [
    BrowserModule,
    DiffModule,
    SharedLibModule,
    ExtLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
