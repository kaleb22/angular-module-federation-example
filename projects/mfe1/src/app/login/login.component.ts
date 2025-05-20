import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  loginForm: FormGroup;

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
    console.log(this.loginForm.valid);
  }
}
