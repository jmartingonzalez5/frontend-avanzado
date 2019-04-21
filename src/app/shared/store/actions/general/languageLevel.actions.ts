import { Action } from '@ngrx/store';
import { LevelStudy } from '../../../models/study.model';

export enum ELanguageLevelActions {
    GetLanguagesLevel = '[LanguageLevel] Get Languages Level',
    GetLanguagesLevelSuccess = '[LanguageLevel] Get Languages Level Success'
}

export class GetLanguagesLevel implements Action {
    public readonly type = ELanguageLevelActions.GetLanguagesLevel;
}

export class GetLanguagesLevelSuccess implements Action {
    public readonly type = ELanguageLevelActions.GetLanguagesLevelSuccess;
    constructor(public payload: LevelStudy[]) {}
}

export type LanguageLevelActions = GetLanguagesLevel | GetLanguagesLevelSuccess;

