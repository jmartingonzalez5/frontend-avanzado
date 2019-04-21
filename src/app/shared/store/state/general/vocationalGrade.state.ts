import { Grade } from '../../../models/study.model';

export interface IVocationalGradeState {
    vocationalGrades: Grade[];
}

export const initialVocationalGradeState: IVocationalGradeState = {
    vocationalGrades: null
};
