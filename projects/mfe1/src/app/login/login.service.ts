import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

import { Login, LoginResponse } from "./login.interface";
import { environment } from "../../environments/environment";

@Injectable()
export class LoginService {

  private httpClient = inject(HttpClient);
  private readonly API_PATH = environment.baseURL;

  private formDatasubject = new Subject<Login>();
  private formDataSubject$ = this.formDatasubject.asObservable();

  triggerLogin(loginData: Login) {
    this.formDatasubject.next(loginData);
  }

  login$ = this.formDataSubject$.pipe(
    switchMap( formData => this.httpClient.post<LoginResponse>(`${this.API_PATH}/login`, formData).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('error on login: ', err);
        return of({
          data: null,
          error: {
            code: err.status,
            message: err.message
          }
        } as LoginResponse)
      })
    ))
  );

}
