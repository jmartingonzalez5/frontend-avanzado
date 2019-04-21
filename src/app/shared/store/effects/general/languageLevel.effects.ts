import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    ELanguageLevelActions,
    GetLanguagesLevel,
    GetLanguagesLevelSuccess,
} from '../../actions/general/languageLevel.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class LanguageLevelEffects {
    @Effect()
    getLanguagesLevel = this._actions$.pipe(
        ofType<GetLanguagesLevel>(ELanguageLevelActions.GetLanguagesLevel),
        switchMap(() => this._generalService.getLanguagesLevel()),
        switchMap(languagesLevel => of(new GetLanguagesLevelSuccess(languagesLevel)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
