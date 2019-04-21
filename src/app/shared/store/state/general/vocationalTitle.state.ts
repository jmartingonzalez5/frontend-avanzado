import { TitleStudy } from '../../../models/study.model';

export interface IVocationalTitleState {
    vocationalTitles: TitleStudy[];
}

export const initialVocationalTitleState: IVocationalTitleState = {
    vocationalTitles: null
};
