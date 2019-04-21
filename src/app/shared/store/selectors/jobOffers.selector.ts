import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IJobOffersState } from '../state/jobOffers.state';

const jobOffersState = (state: IAppState) => state.jobOffers;


export const selectJobOffersList = createSelector(
    jobOffersState,
    (state: IJobOffersState) => state.jobOffers
);