import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { IVocationalGradeState } from '../../state/general/vocationalGrade.state';

const vocationalGradeState = (state: IAppState) => state.vocationalGrades;


export const selectVocationalGradeList = createSelector(
    vocationalGradeState,
    (state: IVocationalGradeState) => state.vocationalGrades
);