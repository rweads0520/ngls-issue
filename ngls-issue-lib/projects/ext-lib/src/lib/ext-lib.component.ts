import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ext-lib',
  template: `
    <p>
      ext-lib works!
    </p>
  `,
  styles: []
})
export class ExtLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
