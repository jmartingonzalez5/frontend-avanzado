import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {EJobOffersActions, GetJobOffers, GetJobOffersSuccess} from '../actions/jobOffers.actions';
import {OffersService} from '../../services/offers.service';


@Injectable()
export class JobOffersEffects {
    @Effect()
    getJobOffers = this._actions$.pipe(
        ofType<GetJobOffers>(EJobOffersActions.GetJobOffers),
        switchMap(() => this._offersService.getOffers()),
        switchMap(offers => of(new GetJobOffersSuccess(offers)))
    );

    constructor(
        private _offersService: OffersService,
        private _actions$: Actions
    ) {}
}
