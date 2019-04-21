import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import {
  Study,
  VocationalStudy,
  CollegeStudy
} from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../shared/store/state/app.state';
import {selectUserProfile} from '../../../../shared/store/selectors/userProfile.selector';
import {selectLanguagesLevelList} from '../../../../shared/store/selectors/general/languageLevel.selector';
import {selectLanguagesNameList} from '../../../../shared/store/selectors/general/languageName.selector';
import {User} from '../../../../shared/models/user.model';
import {selectTypeStudyList} from '../../../../shared/store/selectors/general/typeStudy.selector';
import {SaveProfile} from '../../../../shared/store/actions/userProfile.actions';

@Component({
  selector: 'app-profile-study',
  templateUrl: './profile-study.component.html',
  styleUrls: ['./profile-study.component.scss']
})

export class ProfileStudyComponent {
  studiesForm: FormGroup;
  // options = MockData.TYPE_STUDIES;
    study: Study = {} as (VocationalStudy | CollegeStudy);

    userProfile$ = this._store.pipe(select(selectUserProfile));
    options$  = this._store.pipe(select(selectTypeStudyList));
    userProfile: User;


  constructor(
      private _store: Store<IAppState>,
      private route: ActivatedRoute,
      private router: Router,
      private profileService: ProfileService
    ) {
        this.userProfile$.subscribe(userProfile => this.userProfile = userProfile);

        this.route.params.subscribe(params => {
          // const user = this.profileService.user;
          const uid = +params.uid;
          this.study = (this.userProfile.studies.find(study => study.uid === uid) || {}) as | VocationalStudy  | CollegeStudy;
        });

        this.studiesForm = new FormGroup({
            option: new FormControl(this.study.level, [Validators.required])
        });
  }



  compareOption(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }


  private update(study: VocationalStudy | CollegeStudy) {
    /*
        const user = this.profileService.user;
        const studies = user.studies;
        const foundIndex = studies.findIndex(_study => _study.uid === study.uid);
        studies[foundIndex] = study;
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);
     */
      // const user = this.profileService.user;
      const studies = this.userProfile.studies;
      const foundIndex = studies.findIndex(_study => _study.uid === study.uid);
      studies[foundIndex] = study;

      // this.profileService.updateProfile(user);
      this._store.dispatch(new SaveProfile(this.userProfile));

      this.router.navigate(['/admin/profile']);
  }

  private save(study: VocationalStudy | CollegeStudy) {
    /*
      const user = this.profileService.user;
      const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(
        user.studies,
        study
      );
      user.studies = [...user.studies, _study];
      this.profileService.updateProfile(user);
      this.router.navigate(['/admin/profile']);
     */

      // const user = this.profileService.user;
      const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(
          this.userProfile.studies,
          study
      );
      this.userProfile.studies = [...this.userProfile.studies, _study];

      // this.profileService.updateProfile(user);
      this._store.dispatch(new SaveProfile(this.userProfile));

      this.router.navigate(['/admin/profile']);
  }

  saveOrUpdate(study: VocationalStudy | CollegeStudy) {
      study.level = this.studiesForm.get('option').value;
      this.isNew() ? this.save(study) : this.update(study);
  }

  public isNew(): boolean {
      return !!!this.study.uid;
  }

  public isSelectVocational(): boolean {
      const value = this.studiesForm.get('option').value;
      return value && value.uid === MockData.TYPE_STUDIES[0].uid;
  }

  public isSelectUniversity(): boolean {
      const value = this.studiesForm.get('option').value;
      return value && value.uid === MockData.TYPE_STUDIES[1].uid;
  }

  public backProfile() {
      this.router.navigate(['/admin/profile']);
  }
}
