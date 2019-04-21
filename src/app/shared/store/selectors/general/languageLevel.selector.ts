import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { ILanguageLevelState } from '../../state/general/languageLevel.state';

const languageLevelState = (state: IAppState) => state.languagesLevel;


export const selectLanguagesLevelList = createSelector(
    languageLevelState,
    (state: ILanguageLevelState) => state.languagesLevel
);
