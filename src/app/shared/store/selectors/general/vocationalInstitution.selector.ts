import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { IVocationalInstitutionState } from '../../state/general/vocationalInstitution.state';

const vocationalInstitutionState = (state: IAppState) => state.vocationalInstitutions;


export const selectVocationalInstitutionList = createSelector(
    vocationalInstitutionState,
    (state: IVocationalInstitutionState) => state.vocationalInstitutions
);