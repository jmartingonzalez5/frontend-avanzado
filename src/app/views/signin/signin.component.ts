import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../shared/store/state/app.state';
import {GetMockUser, GetUsers, Login} from '../../shared/store/actions/auth.actions';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorLogin = false;

  constructor(
    private signinService: SigninService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });

    // Inicializar la lista de usuarios:
      this._store.dispatch(new GetUsers());
  }

  onSubmit() {
      this.submitted = true;

      // this.store.dispatch(new GetMockUser());
      this._store.dispatch(new Login({ email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value}));

  }
}
