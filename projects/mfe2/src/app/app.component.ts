import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Mfe2 loaded via module federation as a web component :D</h1>
    <button (click)="toggle()"> Click me </button>
    <p>the current value of the toggle is: {{ flag }}</p>
  `,
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {

  flag = false;

  toggle() {
    this.flag = !this.flag;
  }
}
