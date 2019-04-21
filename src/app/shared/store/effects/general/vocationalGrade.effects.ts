import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    EVocationalGradeActions,
    GetVocationalGrades,
    GetVocationalGradesSuccess
} from '../../actions/general/vocationalGrade.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class VocationalGradeEffects {
    @Effect()
    getVocationalGrades = this._actions$.pipe(
        ofType<GetVocationalGrades>(EVocationalGradeActions.GetVocationalGrades),
        switchMap(() => this._generalService.getVocationalGrades()),
        switchMap(vocationalGrades => of(new GetVocationalGradesSuccess(vocationalGrades)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
