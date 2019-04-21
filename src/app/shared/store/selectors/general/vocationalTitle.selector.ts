import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { IVocationalTitleState } from '../../state/general/vocationalTitle.state';

const vocationalTitleState = (state: IAppState) => state.vocationalTitles;


export const selectVocationalTitlesList = createSelector(
    vocationalTitleState,
    (state: IVocationalTitleState) => state.vocationalTitles
);