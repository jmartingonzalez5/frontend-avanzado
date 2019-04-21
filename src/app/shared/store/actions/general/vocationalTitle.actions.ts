import { Action } from '@ngrx/store';
import { TitleStudy } from '../../../models/study.model';

export enum EVocationalTitleActions {
    GetVocationalTitles = '[VocationalTitle] Get Vocational Titles',
    GetVocationalTitlesSuccess = '[VocationalTitle] Get Vocational Titles Success'
}

export class GetVocationalTitles implements Action {
    public readonly type = EVocationalTitleActions.GetVocationalTitles;
}

export class GetVocationalTitlesSuccess implements Action {
    public readonly type = EVocationalTitleActions.GetVocationalTitlesSuccess;
    constructor(public payload: TitleStudy[]) {}
}

export type VocationalTitleActions = GetVocationalTitles | GetVocationalTitlesSuccess;

