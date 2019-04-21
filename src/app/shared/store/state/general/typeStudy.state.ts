import { TitleStudy } from '../../../models/study.model';

export interface ITypeStudyState {
    typeStudies: TitleStudy[];
}

export const initialTypeStudyState: ITypeStudyState = {
    typeStudies: null,
};
