import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    ELanguageNameActions,
    GetLanguagesName,
    GetLanguagesNameSuccess,
} from '../../actions/general/languageName.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class LanguageNameEffects {
    @Effect()
    getLanguagesName = this._actions$.pipe(
        ofType<GetLanguagesName>(ELanguageNameActions.GetLanguagesName),
        switchMap(() => this._generalService.getLanguagesName()),
        switchMap(languagesName => of(new GetLanguagesNameSuccess(languagesName)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
