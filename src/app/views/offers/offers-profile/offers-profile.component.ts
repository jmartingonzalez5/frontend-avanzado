import { Component, OnInit } from '@angular/core';

import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../shared/store/state/app.state';
import {selectJobOffersList} from '../../../shared/store/selectors/jobOffers.selector';
import {selectUserProfile} from '../../../shared/store/selectors/userProfile.selector';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnInit {

    userProfile$ = this._store.pipe(select(selectUserProfile));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {}
}
