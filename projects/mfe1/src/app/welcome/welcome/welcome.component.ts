import { Component, inject, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WelcomeComponent {

  private loginService = inject(LoginService);

  userName$ = this.loginService.userName$;
}
