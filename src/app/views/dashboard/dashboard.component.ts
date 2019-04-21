import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import { ProfileService } from 'src/app/shared/services/profile.service';
import { SigninService } from '../signin/signin.service';

import { IAppState } from './../../shared/store/state/app.state';
import { GetDocumentsType } from './../../shared/store/actions/general/documentType.actions';
import {GetLanguagesLevel} from '../../shared/store/actions/general/languageLevel.actions';
import {GetLanguagesName} from '../../shared/store/actions/general/languageName.actions';
import {GetVocationalCategories} from '../../shared/store/actions/general/vocationalCategory.actions';
import {GetVocationalInstitutions} from '../../shared/store/actions/general/vocationalInstitution.actions';
import {GetTypeStudies} from '../../shared/store/actions/general/typeStudy.actions';
import {GetProvinces} from '../../shared/store/actions/general/province.actions';
import {GetVocationalGrades} from '../../shared/store/actions/general/vocationalGrade.actions';
import {GetMunicipes} from '../../shared/store/actions/general/municipe.actions';
import {GetVocationalTitles} from '../../shared/store/actions/general/vocationalTitle.actions';
import {selectDocumentTypeList} from '../../shared/store/selectors/general/documentType.selector';
import {selectUser} from '../../shared/store/selectors/auth.selector';

import {User} from '../../shared/models/user.model';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {LoginFailure, Logout} from '../../shared/store/actions/auth.actions';
import {LoadProfile} from '../../shared/store/actions/userProfile.actions';
import {GetJobOffers} from '../../shared/store/actions/jobOffers.actions';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    user$ = this._store.pipe(select(selectUser));
    user: User;

    constructor(private _store: Store<IAppState>) {

        this.user$.subscribe(user => this.user = user);

        // Si no existe el usuario en el Store ... ha habido un error
        // ... y no ha funcionado el:
        // .... catchError(error => of(new LoginFailure(error)))

        // !!! CHAPUZA POR RESOLVER !!!
        // ¿Por qué no funciona el catchError???
        if (this.user.id === undefined){
            // Se hace de forma automática el logout:
            this._store.dispatch(new Logout());
        }


    }

    ngOnInit() {
        this._store.dispatch(new LoadProfile());
        // ¿Donde habría que colocar las siguientes sentencias para que se ejecutaran
        //      una única vez??
        this._store.dispatch(new GetDocumentsType());
        this._store.dispatch(new GetLanguagesLevel());
        this._store.dispatch(new GetLanguagesName());
        this._store.dispatch(new GetMunicipes());
        this._store.dispatch(new GetProvinces());
        this._store.dispatch(new GetTypeStudies());
        this._store.dispatch(new GetVocationalCategories());
        this._store.dispatch(new GetVocationalGrades());
        this._store.dispatch(new GetVocationalInstitutions());
        this._store.dispatch(new GetVocationalTitles());
        this._store.dispatch(new GetJobOffers());

    }

  /*   constructor(
    private profileService: ProfileService,
    private signinService: SigninService
  ) {
    this.signinService
      .login({ email: 'carlos.caballero@gmail.com', password: '1234' })
      .then(user => {
        this.profileService.user = user;
      });
  } */
}
