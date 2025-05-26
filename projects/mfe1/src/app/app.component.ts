import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    RouterModule
  ],
  providers: [LoginService]
})
export class AppComponent { }
