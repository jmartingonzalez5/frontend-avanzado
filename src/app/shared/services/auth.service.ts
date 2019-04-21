import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import { MockData } from '../mock-data';

import {DocumentType, Municipe, Province, User} from '../models/user.model';
import { Institution, Category, Grade, TitleStudy, LevelStudy } from '../models/study.model';
import {LanguageLevel, LanguageName} from '../models/language.model';
import {AppSettings} from '../app.settings';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(private http: HttpClient) {}

    getMockUser(): Observable <User>{
        return of(MockData.USER);
    }

    getUsers(): Observable<User[]>{
        return from(this.http.get<any>(AppSettings.API_ENDPOINT_USERS).toPromise());
    }

}

