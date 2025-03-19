import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  log(msg: string) {
    console.log(`[${new Date().toLocaleString()}]: MSG -> ${msg}`);
  }

  error(error: string) {
    console.error(`[${new Date().toLocaleString()}]: Error -> ${error}`);
  }
}

