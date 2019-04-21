import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    EMunicipeActions,
    GetMunicipes,
    GetMunicipesSuccess,
} from '../../actions/general/municipe.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class MunicipeEffects {
    @Effect()
    getMunicipes = this._actions$.pipe(
        ofType<GetMunicipes>(EMunicipeActions.GetMunicipes),
        switchMap(() => this._generalService.getMunicipes()),
        switchMap(municipes => of(new GetMunicipesSuccess(municipes)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
