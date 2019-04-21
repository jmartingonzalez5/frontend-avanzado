import { RouterReducerState } from '@ngrx/router-store';
import { IDocumentTypeState, initialDocumentTypeState } from './general/documentType.state';
import { ILanguageLevelState, initialLanguageLevelState} from './general/languageLevel.state';
import { ILanguageNameState, initialLanguageNameState} from './general/languageName.state';
import { IMunicipeState, initialMunicipeState} from './general/municipe.state';
import { IProvinceState, initialProvinceState} from './general/province.state';
import { ITypeStudyState, initialTypeStudyState} from './general/typeStudy.state';
import { IVocationalCategoryState, initialVocationalCategoryState} from './general/vocationalCategory.state';
import { IVocationalGradeState, initialVocationalGradeState} from './general/vocationalGrade.state';
import { IVocationalInstitutionState, initialVocationalInstitutionState} from './general/vocationalInstitution.state';
import { IVocationalTitleState, initialVocationalTitleState} from './general/vocationalTitle.state';
import {IAuthState, initialAuthState} from './auth.state';
import {IUserProfileState, initialUserProfileState} from './userProfile.state';
import {IJobOffersState, initialJobOffersState} from './jobOffers.state';

export interface IAppState {
    router?: RouterReducerState;
    documentsType: IDocumentTypeState;
    languagesLevel: ILanguageLevelState;
    languagesName: ILanguageNameState;
    municipes: IMunicipeState;
    provinces: IProvinceState;
    typeStudies: ITypeStudyState;
    vocationalCategories: IVocationalCategoryState;
    vocationalGrades: IVocationalGradeState;
    vocationalInstitutions: IVocationalInstitutionState;
    vocationalTitles: IVocationalTitleState;
    auth: IAuthState;
    userProfile: IUserProfileState;
    jobOffers: IJobOffersState;
}

export const initialAppState: IAppState = {
    documentsType: initialDocumentTypeState,
    languagesLevel: initialLanguageLevelState,
    languagesName: initialLanguageNameState,
    municipes: initialMunicipeState,
    provinces: initialProvinceState,
    typeStudies: initialTypeStudyState,
    vocationalCategories: initialVocationalCategoryState,
    vocationalGrades: initialVocationalGradeState,
    vocationalInstitutions: initialVocationalInstitutionState,
    vocationalTitles: initialVocationalTitleState,
    auth: initialAuthState,
    userProfile: initialUserProfileState,
    jobOffers: initialJobOffersState
};

export function getInitialState(): IAppState {
    return initialAppState;
}

