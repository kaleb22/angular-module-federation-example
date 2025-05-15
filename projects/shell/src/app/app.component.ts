import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { LogService, MessageService } from '@shared';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app-shell';

  private logService = inject(LogService)
  private messageService = inject(MessageService);
  private sub = new Subscription();

  message;

  ngOnInit(): void {
    this.logService.log('testing logging library');
   this.sub.add( this.messageService.retrieveData()
      .subscribe( (e: CustomEvent) => this.message = e.detail)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getMessageFromMFEs() {
    this.message = this.messageService.retrieveData();
  }

  sendMessage() {
    const msg = 'Hello from Shell :D';
    this.messageService.sendData(msg);
  }
}

