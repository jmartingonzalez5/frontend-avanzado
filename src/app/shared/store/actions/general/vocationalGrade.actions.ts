import { Action } from '@ngrx/store';
import { Grade } from '../../../models/study.model';

export enum EVocationalGradeActions {
    GetVocationalGrades = '[VocationalGrade] Get Vocational Grades',
    GetVocationalGradesSuccess = '[VocationalGrade] Get Vocational Grades Success'
}

export class GetVocationalGrades implements Action {
    public readonly type = EVocationalGradeActions.GetVocationalGrades;
}

export class GetVocationalGradesSuccess implements Action {
    public readonly type = EVocationalGradeActions.GetVocationalGradesSuccess;
    constructor(public payload: Grade[]) {}
}

export type VocationalGradeActions = GetVocationalGrades | GetVocationalGradesSuccess;

