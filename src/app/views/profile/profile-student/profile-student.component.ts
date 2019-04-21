import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import {select, Store} from '@ngrx/store';
import {selectUserProfile} from '../../../shared/store/selectors/userProfile.selector';
import {IAppState} from '../../../shared/store/state/app.state';
import {SaveProfile} from '../../../shared/store/actions/userProfile.actions';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})

export class ProfileStudentComponent {
    userProfile$ = this._store.pipe(select(selectUserProfile));
    userProfile: User;

  user: User;
  constructor(private _store: Store<IAppState>) {
      this.userProfile$.subscribe(userProfile => this.userProfile = userProfile);
  }



  deleteStudy(studyID: number) {
      const studies = this.userProfile.studies;
      const index = studies.findIndex(study => study.uid === studyID);
      if (index === -1) {
          alert('Error: Study not found');
          return;
      }
      studies.splice(index, 1);

      this._store.dispatch(new SaveProfile(this.userProfile));
  }


  deleteLanguage(languageID: any) {
    const languages = this.userProfile.languages;
    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert('Error: Language not found');
      return;
    }
    languages.splice(index, 1);

      this._store.dispatch(new SaveProfile(this.userProfile));
  }
}
