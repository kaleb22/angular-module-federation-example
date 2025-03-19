import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogService } from '@shared';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    RouterModule
  ]
})
export class HomeComponent implements OnInit {

  private logService = inject(LogService);

  ngOnInit(): void {
    this.logService.log('MFE1 initialized successfully');
  }

}
