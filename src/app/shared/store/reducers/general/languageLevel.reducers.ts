import { ELanguageLevelActions, LanguageLevelActions } from './../../actions/general/languageLevel.actions';
import { initialLanguageLevelState, ILanguageLevelState } from '../../state/general/languageLevel.state';

export const languageLevelReducers = (
    state = initialLanguageLevelState,
    action: LanguageLevelActions
): ILanguageLevelState => {
    switch (action.type) {
        case ELanguageLevelActions.GetLanguagesLevelSuccess: {
            return {
                ...state,
                languagesLevel: action.payload
            };
        }
        default:
            return state;
    }
};

