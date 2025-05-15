import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    RouterModule,
  ]
})
export class HomeComponent {
}
