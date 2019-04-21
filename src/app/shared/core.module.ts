import { NgModule, Optional, SkipSelf, Provider } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
/* import { JWTInterceptor } from './interceptors/jwt.interceptor'; */
/* import { JwtExpiredInterceptor } from './interceptors/jwt-expired.interceptor'; */

/* import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; */

/* import { metaReducers, reducers } from './states/root.reducer';
import { AuthEffects } from './states/auth/effects/auth.effects';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './states/router/effects/router.effects';

import { UserEffects } from './states/user/effects/user.effects';
import { AppEffects } from './states/app/effects'; */
/* import { UsersEffects } from './states/users/effects'; */
/* import { UsersService } from '../views/users/shared/users.service'; */
import { ProfileService } from './services/profile.service';

/* import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsService } from './services/notifications.service';
import { OffersService } from './services/offers.service';
import { appReducers } from './store/reducers/app.reducers';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './inmemory-db/inmemory-db.service';
import {DocumentTypeEffects} from './store/effects/general/documentType.effects';
import {LanguageLevelEffects} from './store/effects/general/languageLevel.effects';
import {LanguageNameEffects} from './store/effects/general/languageName.effects';
import {MunicipeEffects} from './store/effects/general/municipe.effects';
import {ProvinceEffects} from './store/effects/general/province.effects';
import {TypeStudyEffects} from './store/effects/general/typeStudy.effects';
import {VocationalCategoryEffects} from './store/effects/general/vocationalCategory.effects';
import {VocationalTitleEffects} from './store/effects/general/vocationalTitle.effects';
import {VocationalInstitutionEffects} from './store/effects/general/vocationalInstitution.effects';
import {VocationalGradeEffects} from './store/effects/general/vocationalGrade.effects';
import {AuthEffects} from './store/effects/auth.effects';
import {UserProfileEffects} from './store/effects/userProfile.effects';
import {JobOffersEffects} from './store/effects/jobOffers.effects';


/* export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
} */

export const CORE_SERVICES: Provider[] = [
  ProfileService,
  OffersService,
  NotificationsService
  /* {
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtExpiredInterceptor,
    multi: true,
  }, */
  /*   { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
  { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  { provide: RouterStateSerializer, useClass: CustomSerializer }, */
  /* {
    provide: MatPaginatorIntl,
    useClass: DatatablePaginatorIntl,
    deps: [TranslateService],
  }, */
];

@NgModule({
  imports: [
      BrowserAnimationsModule,
      HttpClientModule,
      StoreModule.forRoot(appReducers),
      StoreDevtoolsModule.instrument({ maxAge: 50 }),
      EffectsModule.forRoot([
          DocumentTypeEffects,
          LanguageLevelEffects,
          LanguageNameEffects,
          MunicipeEffects,
          ProvinceEffects,
          TypeStudyEffects,
          VocationalCategoryEffects,
          VocationalGradeEffects,
          VocationalInstitutionEffects,
          VocationalTitleEffects,
          AuthEffects,
          UserProfileEffects,
          JobOffersEffects
      ]),
      StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true })

    /*     StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([
      AppEffects,
      AuthEffects,
      UserEffects,
      RouterEffects
    ]),*/
    /*  TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) */
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
  ],
  providers: CORE_SERVICES
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
