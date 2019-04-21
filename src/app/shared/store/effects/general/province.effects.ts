import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    EProvinceActions,
    GetProvinces,
    GetProvincesSuccess
} from '../../actions/general/province.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class ProvinceEffects {
    @Effect()
    getProvinces = this._actions$.pipe(
        ofType<GetProvinces>(EProvinceActions.GetProvincesLevel),
        switchMap(() => this._generalService.getProvinces()),
        switchMap(provinces => of(new GetProvincesSuccess(provinces)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
