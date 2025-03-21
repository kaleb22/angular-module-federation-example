import { Injectable } from "@angular/core";
import { fromEvent, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private MY_CUSTOM_EVENT = 'myCustomEvent';

  sendData<T>(data: T) {
    const event = new CustomEvent(this.MY_CUSTOM_EVENT, { detail: data });
    dispatchEvent(event);
    console.log('event sent -> ', data);
  }

  retrieveData(): Observable<Event> {
    return fromEvent(window, this.MY_CUSTOM_EVENT);
  }

}
