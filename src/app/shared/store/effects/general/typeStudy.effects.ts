import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    ETypeStudyActions,
    GetTypeStudies,
    GetTypeStudiesSuccess
} from '../../actions/general/typeStudy.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class TypeStudyEffects {
    @Effect()
    getTypeStudies = this._actions$.pipe(
        ofType<GetTypeStudies>(ETypeStudyActions.GetTypeStudies),
        switchMap(() => this._generalService.getTypeStudies()),
        switchMap(typeStudies => of(new GetTypeStudiesSuccess(typeStudies)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
