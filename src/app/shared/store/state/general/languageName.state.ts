import { LanguageName } from '../../../models/language.model';

export interface ILanguageNameState {
    languagesName: LanguageName[];
}

export const initialLanguageNameState: ILanguageNameState = {
    languagesName: null
};
