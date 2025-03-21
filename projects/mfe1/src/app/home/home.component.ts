import { Component, inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { LogService, MessageService } from '@shared';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    RouterModule,
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  private logService = inject(LogService);
  private messageService = inject(MessageService);
  private sub = new Subscription();

  message;

  ngOnInit(): void {
    this.logService.log('MFE1 initialized successfully');
    this.sub.add(
      this.messageService.retrieveData()
        .subscribe( (e: CustomEvent) => this.message = e.detail)
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  sendMessage() {
    const message = 'Hello from MFE1 :D'
    this.messageService.sendData(message);
  }

}
