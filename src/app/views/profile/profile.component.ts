import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../shared/store/state/app.state';
import {User} from '../../shared/models/user.model';
import {selectUserProfile} from '../../shared/store/selectors/userProfile.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    userProfile$ = this._store.pipe(select(selectUserProfile));

    constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
  }

}
