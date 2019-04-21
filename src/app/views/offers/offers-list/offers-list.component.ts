import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';

import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../shared/store/state/app.state';
import {selectUserProfile} from '../../../shared/store/selectors/userProfile.selector';
import {User} from '../../../shared/models/user.model';

import {selectJobOffersList} from '../../../shared/store/selectors/jobOffers.selector';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {

    userProfile$ = this._store.pipe(select(selectUserProfile));
    userProfile: User;

    jobOffers$ = this._store.pipe(select(selectJobOffersList));
    jobOffers: Offer[];


    offersStudy: Offer[] = [];
    offersOther: Offer[] = [];


  constructor(private _store: Store<IAppState>) {

        this.userProfile$.subscribe(userProfile => this.userProfile = userProfile);
        this.jobOffers$.subscribe(jobOffers => this.jobOffers = jobOffers);

        this.selectOffers();
  }



  private selectOffers() {
      const studiesOfUser = this.userProfile.studies;
      const offersOfUser = this.userProfile.offers;

      this.offersStudy = this.jobOffers
          .filter(offer =>
              studiesOfUser.some(study => study.uid === offer.category.uid)
          )
          .map(offer => {
              const offerUser = !!offersOfUser.find(
                  _offerUser => _offerUser.id === offer.id
              );
              return { ...offer, subscribe: offerUser };
          });


      this.offersOther = this.jobOffers.filter(offer =>
          studiesOfUser.every(study => study.uid !== offer.category.uid)
      );
  }

  ngOnInit() {}
}
