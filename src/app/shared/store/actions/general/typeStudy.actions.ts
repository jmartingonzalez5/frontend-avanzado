import { Action } from '@ngrx/store';
import { LevelStudy } from '../../../models/study.model';

export enum ETypeStudyActions {
    GetTypeStudies = '[TypeStudy] Get Type Studies',
    GetTypeStudiesSuccess = '[TypeStudy] Get Type Studies Success'
}

export class GetTypeStudies implements Action {
    public readonly type = ETypeStudyActions.GetTypeStudies;
}

export class GetTypeStudiesSuccess implements Action {
    public readonly type = ETypeStudyActions.GetTypeStudiesSuccess;
    constructor(public payload: LevelStudy[]) {}
}

export type TypeStudyActions = GetTypeStudies | GetTypeStudiesSuccess;

