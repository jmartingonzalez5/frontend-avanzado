import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    EVocationalInstitutionActions,
    GetVocationalInstitutions,
    GetVocationalInstitutionsSuccess
} from '../../actions/general/vocationalInstitution.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class VocationalInstitutionEffects {
    @Effect()
    getVocationalInstitutions = this._actions$.pipe(
        ofType<GetVocationalInstitutions>(EVocationalInstitutionActions.GetVocationalInstitutions),
        switchMap(() => this._generalService.getVocationalInstitutions()),
        switchMap(vocationalInstitutions => of(new GetVocationalInstitutionsSuccess(vocationalInstitutions)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
