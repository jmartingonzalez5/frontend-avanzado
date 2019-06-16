import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../app/shared/states/store.interface';
import * as AuthActions from '../../../app/shared/states/auth/actions/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorLogin = false;
  constructor(private store$: Store<AppStore>) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),
    });
  }

  onSubmit() {
    this.submitted = true;
    this.store$.dispatch(new AuthActions.Identification({...this.loginForm.value}));
  }

  getErrorMessagePassword(){
      return this.loginForm.controls['password'].hasError('required') ? 'Debes introducir un valor' : '';
  }
  getErrorMessageEmail() {
        return this.loginForm.controls['email'].hasError('required') ? 'Debes introducir un valor' :
            this.loginForm.controls['email'].hasError('email') ? 'Email con formato inválido' :
                '';
    }
}
