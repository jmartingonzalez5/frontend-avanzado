import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { IVocationalCategoryState } from '../../state/general/vocationalCategory.state';

const vocationalCategoryState = (state: IAppState) => state.vocationalCategories;


export const selectVocationalCategoryList = createSelector(
    vocationalCategoryState,
    (state: IVocationalCategoryState) => state.vocationalCategories
);
