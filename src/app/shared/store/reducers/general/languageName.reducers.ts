import { ELanguageNameActions, LanguageNameActions } from './../../actions/general/languageName.actions';
import { initialLanguageNameState, ILanguageNameState } from '../../state/general/languageName.state';

export const languageNameReducers = (
    state = initialLanguageNameState,
    action: LanguageNameActions
): ILanguageNameState => {
    switch (action.type) {
        case ELanguageNameActions.GetLanguagesNameSuccess: {
            return {
                ...state,
                languagesName: action.payload
            };
        }
        default:
            return state;
    }
};

