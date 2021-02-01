import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  version = 1;

  constructor(@Inject(DOCUMENT) private document: Document){}

  loadStyle(version: number) {
    this.version = version;
  }
}
