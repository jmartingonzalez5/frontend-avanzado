import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import { MockData } from 'src/app/shared/mock-data';
import {
  Language,
  LanguageLevel,
  LanguageName
} from 'src/app/shared/models/language.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import {select, Store} from '@ngrx/store';
import {selectUserProfile} from '../../../../shared/store/selectors/userProfile.selector';
import {selectDocumentTypeList} from '../../../../shared/store/selectors/general/documentType.selector';
import {selectMunicipesList} from '../../../../shared/store/selectors/general/municipe.selector';
import {selectProvincesList} from '../../../../shared/store/selectors/general/province.selector';
import {User} from '../../../../shared/models/user.model';
import {IAppState} from '../../../../shared/store/state/app.state';
import {selectLanguagesNameList} from '../../../../shared/store/selectors/general/languageName.selector';
import {selectLanguagesLevelList} from '../../../../shared/store/selectors/general/languageLevel.selector';
import {SaveProfile} from '../../../../shared/store/actions/userProfile.actions';

@Component({
  selector: 'app-profile-language',
  templateUrl: './profile-language.component.html',
  styleUrls: ['./profile-language.component.scss']
})

export class ProfileLanguageComponent implements OnInit {
    rForm: FormGroup;

    userProfile$ = this._store.pipe(select(selectUserProfile));
    languageLevels$  = this._store.pipe(select(selectLanguagesLevelList));
    languageNames$  = this._store.pipe(select(selectLanguagesNameList));
    userProfile: User;
    language: Language = {} as Language;


  constructor(
      private _store: Store<IAppState>,
      private route: ActivatedRoute,
      private router: Router
  ) {

      this.userProfile$.subscribe(userProfile => this.userProfile = userProfile);

      this.route.params.subscribe(params => {
        // const user = this.profileService.user;
        const uid = +params.uid;
        this.language = (this.userProfile.languages.find(language => language.uid === uid) ||
          {}) as Language;
      });



  }
  ngOnInit() {
    // this.loadSelectProperties();
    this.loadFormInstance();
  }


  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      level: new FormControl(this.language.level, [Validators.required]),
      name: new FormControl(this.language.name, [Validators.required]),
      date: new FormControl(this.language.date, [
        Validators.required,
        dateValidator()
      ])
    });
  }

  public submit() {
      this.saveOrUpdate({ ...this.language, ...this.rForm.value });
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }


  private update(language: Language) {

      const languages = this.userProfile.languages;
      const foundIndex = languages.findIndex(
          _language => _language.uid === language.uid
      );
      languages[foundIndex] = language;


      this._store.dispatch(new SaveProfile(this.userProfile));

      this.router.navigate(['/admin/profile']);
  }


  private save(language: Language) {

      const _language = MockData.fakeIncreaseID<Language>(
          this.userProfile.languages,
          language
      );

      this.userProfile.languages = [...this.userProfile.languages, _language];

      this._store.dispatch(new SaveProfile(this.userProfile));

      this.router.navigate(['/admin/profile']);
  }

  saveOrUpdate(language: Language) {
      this.isNew() ? this.save(language) : this.update(language);
  }

  public isNew(): boolean {
      return !!!this.language.uid;
  }
}
