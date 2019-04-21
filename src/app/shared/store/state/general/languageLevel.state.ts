import { LevelStudy } from '../../../models/study.model';

export interface ILanguageLevelState {
    languagesLevel: LevelStudy[];
}

export const initialLanguageLevelState: ILanguageLevelState = {
    languagesLevel: null
};
