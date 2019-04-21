import { ActionReducerMap } from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {IAppState} from '../state/app.state';
import {documentTypeReducers} from './general/documentType.reducers';
import {languageLevelReducers} from './general/languageLevel.reducers';
import {provinceReducers} from './general/province.reducers';
import {vocationalGradeReducers} from './general/vocationalGrade.reducers';
import {languageNameReducers} from './general/languageName.reducers';
import {municipeReducers} from './general/municipe.reducers';
import {typeStudyReducers} from './general/typeStudy.reducers';
import {vocationalCategoryReducers} from './general/vocationalCategory.reducers';
import {vocationalInstitutionReducers} from './general/vocationalInstitution.reducers';
import {vocationalTitleReducers} from './general/vocationalTitle.reducers';
import {authReducers} from './auth.reducers';
import {userProfileReducers} from './userProfile.reducers';
import {jobOffersReducers} from './jobOffers.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    documentsType: documentTypeReducers,
    languagesLevel: languageLevelReducers,
    languagesName: languageNameReducers,
    municipes: municipeReducers,
    provinces: provinceReducers,
    typeStudies: typeStudyReducers,
    vocationalCategories: vocationalCategoryReducers,
    vocationalGrades: vocationalGradeReducers,
    vocationalInstitutions: vocationalInstitutionReducers,
    vocationalTitles: vocationalTitleReducers,
    auth: authReducers,
    userProfile: userProfileReducers,
    jobOffers: jobOffersReducers
};
