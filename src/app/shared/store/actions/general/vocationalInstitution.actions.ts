import { Action } from '@ngrx/store';
import { Institution } from '../../../models/study.model';

export enum EVocationalInstitutionActions {
    GetVocationalInstitutions = '[VocationalInstitution] Get Vocational Institutions',
    GetVocationalInstitutionsSuccess = '[VocationalInstitution] Get Vocational Institutions Success'
}

export class GetVocationalInstitutions implements Action {
    public readonly type = EVocationalInstitutionActions.GetVocationalInstitutions;
}

export class GetVocationalInstitutionsSuccess implements Action {
    public readonly type = EVocationalInstitutionActions.GetVocationalInstitutionsSuccess;
    constructor(public payload: Institution[]) {}
}

export type VocationalInstitutionActions = GetVocationalInstitutions | GetVocationalInstitutionsSuccess;

