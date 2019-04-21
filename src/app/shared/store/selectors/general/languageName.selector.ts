import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { ILanguageNameState } from '../../state/general/languageName.state';

const languageNameState = (state: IAppState) => state.languagesName;


export const selectLanguagesNameList = createSelector(
    languageNameState,
    (state: ILanguageNameState) => state.languagesName
);
