import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {from, of} from 'rxjs';
import {catchError, exhaustMap, map, switchMap, tap} from 'rxjs/operators';
import {
    EAuthActions, GetMockUser,
    GetMockUserSuccess, GetUsers, GetUsersSuccess, Login, LoginFailure, LoginSuccess, Logout, LogoutSuccess,
} from '../actions/auth.actions';
import {GeneralService} from '../../services/general.service';
import {Credential} from '../../models/auth.model';
import {SigninService} from '../../../views/signin/signin.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {LoadProfile, LoadProfileSuccess} from '../actions/userProfile.actions';



@Injectable()
export class AuthEffects {
    @Effect()
    getMockUser = this._actions$.pipe(
        ofType<GetMockUser>(EAuthActions.GetMockUser),
        switchMap(() => this._authService.getMockUser()),
        switchMap(user => of(new GetMockUserSuccess(user)))
    );

    @Effect()
    getUsers = this._actions$.pipe(
        ofType<GetUsers>(EAuthActions.GetUsers),
        switchMap(() => this._authService.getUsers()),
        switchMap(users => of(new GetUsersSuccess(users)))
    );

    @Effect()
    login = this._actions$.pipe(
        ofType<Login>(EAuthActions.Login),
        map(action => action.payload),
        exhaustMap((auth: Credential) =>
            from(this._signinService.login(auth)).pipe(
                switchMap(user => of(new LoginSuccess(user))),
                catchError(error => of(new LoginFailure(error))),
                tap( () => this.router.navigate(['admin/dashboard']))
            )
        )
    );

    @Effect()
    logout = this._actions$.pipe(
        ofType<Logout>(EAuthActions.Logout),
            switchMap(() => of(new LogoutSuccess())),
            tap( () => this.router.navigate(['/']))
        );

    constructor(
        private _generalService: GeneralService,
        private _authService: AuthService,
        private _signinService: SigninService,
        private _actions$: Actions,
        private router: Router
    ) {}
}
