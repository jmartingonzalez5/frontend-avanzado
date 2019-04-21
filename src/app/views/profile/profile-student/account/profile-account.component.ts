import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import {
  User
} from 'src/app/shared/models/user.model';
import { documentNumberValidator } from 'src/app/shared/directives/document-number-validator.directive';
import {select, Store} from '@ngrx/store';
import {selectUserProfile} from '../../../../shared/store/selectors/userProfile.selector';
import {IAppState} from '../../../../shared/store/state/app.state';
import {SaveProfile} from '../../../../shared/store/actions/userProfile.actions';
import {selectDocumentTypeList} from '../../../../shared/store/selectors/general/documentType.selector';
import {selectMunicipesList} from '../../../../shared/store/selectors/general/municipe.selector';
import {selectProvincesList} from '../../../../shared/store/selectors/general/province.selector';

@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.scss']
})
export class ProfileAccountComponent implements OnInit {
  rForm: FormGroup;

  userProfile$ = this._store.pipe(select(selectUserProfile));
  documentsType$  = this._store.pipe(select(selectDocumentTypeList));
  municipes$  = this._store.pipe(select(selectMunicipesList));
  provinces$  = this._store.pipe(select(selectProvincesList));
  userProfile: User;

  constructor(private _store: Store<IAppState>, private router: Router) {
      this.userProfile$.subscribe(userProfile => this.userProfile = userProfile);

  }

  ngOnInit() {
        this.loadFormInstance();
  }


  public loadFormInstance(): void {
    this.rForm = new FormGroup(
      {
        name: new FormControl(this.userProfile.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        surname: new FormControl(this.userProfile.surname, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        phone: new FormControl(this.userProfile.phone, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),
        phone2: new FormControl(this.userProfile.phone2, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),

        birthdate: new FormControl(this.userProfile.birthdate, [
          Validators.required,
          dateValidator()
        ]),
        documentType: new FormControl(this.userProfile.documentType, [
          Validators.required
        ]),
        documentNumber: new FormControl(this.userProfile.documentNumber, [
          Validators.required
        ]),
        street: new FormControl(this.userProfile.address.street, [
          Validators.required
        ]),
        municipe: new FormControl(this.userProfile.address.municipe, [
          Validators.required
        ]),
        province: new FormControl(this.userProfile.address.province, [
          Validators.required
        ]),
        aboutMe: new FormControl(this.userProfile.aboutMe),
        otherCompetences: new FormControl(this.userProfile.aboutMe),
        license: new FormControl(this.userProfile.license)
      },
      documentNumberValidator()
    );
  }

  public save() {
        const user = { ...this.userProfile, ...this.rForm.value };
        this._store.dispatch(new SaveProfile(user));
        this.router.navigate(['admin/profile']);
  }

  compareByUID(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
}
