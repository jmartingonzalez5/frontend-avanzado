import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { ITypeStudyState } from '../../state/general/typeStudy.state';

const typeStudyState = (state: IAppState) => state.typeStudies;


export const selectTypeStudyList = createSelector(
    typeStudyState,
    (state: ITypeStudyState) => state.typeStudies
);
