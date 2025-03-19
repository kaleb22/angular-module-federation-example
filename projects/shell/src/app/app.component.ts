import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogService } from '@shared';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-shell';

  private logService = inject(LogService)

  ngOnInit(): void {
    this.logService.log('testing logging library');
  }
}

