import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    EVocationalTitleActions,
    GetVocationalTitles,
    GetVocationalTitlesSuccess
} from '../../actions/general/vocationalTitle.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class VocationalTitleEffects {
    @Effect()
    getVocationalTitles = this._actions$.pipe(
        ofType<GetVocationalTitles>(EVocationalTitleActions.GetVocationalTitles),
        switchMap(() => this._generalService.getVocationalTitles()),
        switchMap(vocationalTitles => of(new GetVocationalTitlesSuccess(vocationalTitles)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
