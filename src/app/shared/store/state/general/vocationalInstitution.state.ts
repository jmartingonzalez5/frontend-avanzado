import { Institution } from '../../../models/study.model';

export interface IVocationalInstitutionState {
    vocationalInstitutions: Institution[];
}

export const initialVocationalInstitutionState: IVocationalInstitutionState = {
    vocationalInstitutions: null
};
