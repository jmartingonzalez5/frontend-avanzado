import { Action } from '@ngrx/store';
import { LanguageName } from '../../../models/language.model';

export enum ELanguageNameActions {
    GetLanguagesName = '[LanguageName] Get Languages Name',
    GetLanguagesNameSuccess = '[LanguageName] Get Languages Name Success'
}

export class GetLanguagesName implements Action {
    public readonly type = ELanguageNameActions.GetLanguagesName;
}

export class GetLanguagesNameSuccess implements Action {
    public readonly type = ELanguageNameActions.GetLanguagesNameSuccess;
    constructor(public payload: LanguageName[]) {}
}

export type LanguageNameActions = GetLanguagesName | GetLanguagesNameSuccess;

