import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    EVocationalCategoryActions,
    GetVocationalCategories,
    GetVocationalCategoriesSuccess,
} from '../../actions/general/vocationalCategory.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class VocationalCategoryEffects {
    @Effect()
    getVocationalCategories = this._actions$.pipe(
        ofType<GetVocationalCategories>(EVocationalCategoryActions.GetVocationalCategories),
        switchMap(() => this._generalService.getVocationalCategories()),
        switchMap(vocationalCategories => of(new GetVocationalCategoriesSuccess(vocationalCategories)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}
