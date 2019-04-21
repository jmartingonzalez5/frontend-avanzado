import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import { MockData } from '../mock-data';

import {DocumentType, Municipe, Province, User} from '../models/user.model';
import { Institution, Category, Grade, TitleStudy, LevelStudy } from '../models/study.model';
import {LanguageLevel, LanguageName} from '../models/language.model';
import {AppSettings} from '../app.settings';


@Injectable({
    providedIn: 'root'
})
export class GeneralService {

    constructor() {}

    getDocumentsType(): Observable <DocumentType[]> {
        return of(MockData.DOCUMENTS_TYPE);
    }

    getLanguagesLevel(): Observable <LanguageLevel[]> {
        return of(MockData.LANGUAGES_LEVEL);
    }

    getLanguagesName(): Observable <LanguageName[]> {
        return of(MockData.LANGUAGES_NAME);
    }

    getProvinces(): Observable <Province[]> {
      return of(MockData.PROVINCES);
    }

    getMunicipes(): Observable <Municipe[]> {
        return of(MockData.MUNICIPES);
    }

    getTypeStudies(): Observable <LevelStudy[]> {
        return of(MockData.TYPE_STUDIES);
    }

    getVocationalInstitutions(): Observable <Institution[]> {
        return of(MockData.VOCATIONAL_INSTITUTION);
    }

    getVocationalCategories(): Observable <Category[]> {
        return of(MockData.VOCATIONAL_CATEGORY);
    }

    getVocationalTitles(): Observable <TitleStudy[]> {
        return of(MockData.VOCATIONAL_TITLE);
    }

    getVocationalGrades(): Observable <Grade[]> {
        return of(MockData.VOCATIONAL_GRADES);
    }


}

