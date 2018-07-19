import { Component } from '@angular/core';
import { SameModuleComponent } from './same-module.component';
import { DiffModuleComponent } from '../diff-module/diff-module.component';
import { SharedLibComponent } from 'shared-lib';
import { ExtLibComponent } from 'ext-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
}
