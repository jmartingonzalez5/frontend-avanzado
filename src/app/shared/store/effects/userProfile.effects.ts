
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {from, of} from 'rxjs';
import {catchError, exhaustMap, map, switchMap, tap} from 'rxjs/operators';

import {GeneralService} from '../../services/general.service';
import {SigninService} from '../../../views/signin/signin.service';

import {
    EUserProfileActions,
    LoadProfile,
    LoadProfileSuccess,
    SaveProfile,
    SaveProfileSuccess
} from '../actions/userProfile.actions';
import {select, Store} from '@ngrx/store';
import {selectUser} from '../selectors/auth.selector';
import {IAppState} from '../state/app.state';
import {ProfileService} from '../../services/profile.service';
import {User} from '../../models/user.model';


@Injectable()
export class UserProfileEffects {
    @Effect()
    loadProfile = this._actions$.pipe(
        ofType<LoadProfile>(EUserProfileActions.LoadProfile),
        switchMap(() => this._store.pipe(select(selectUser))),
        switchMap(user => of(new LoadProfileSuccess(user)))
    );


    @Effect()
    saveProfile = this._actions$.pipe(
        ofType<SaveProfile>(EUserProfileActions.SaveProfile),
        map(action => action.payload),
        switchMap((user: User) => this._profileService.updateProfile(user)),
        switchMap(user => of(new SaveProfileSuccess(user)))
    );



    constructor(
        private _store: Store<IAppState>,
        private _generalService: GeneralService,
        private _signinService: SigninService,
        private _profileService: ProfileService,
        private _actions$: Actions
    ) {}
}

