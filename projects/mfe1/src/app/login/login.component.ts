import { Router } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { LoginService } from './login.service';
import { Login } from './login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);

  showSpinner = false;
  loginForm: FormGroup;
  login$ = this.loginService.login$.pipe(
    tap(res => {
      this.showSpinner = false;
      if(!('error' in res)) {
        this.loginService.setUserName(res.data.userName);
        this.router.navigate(['/welcome']);
      }
    })
  );

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern(/(?=.*\d)(?=.*[A-Z]).*/)
        ])
    });
  }

  checkError(controlName: string) {
    return {
      'has-error': this.verifyValidTouched(controlName)
    }
  }

  verifyValidTouched(controlName: string) {
    return !this.loginForm.get(controlName).valid && this.loginForm.get(controlName).touched;
  }

  login() {
    this.showSpinner = true;
    const loginData: Login = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    this.loginService.triggerLogin(loginData);
  }
}
