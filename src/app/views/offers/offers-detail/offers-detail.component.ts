import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../shared/store/state/app.state';
import {selectUserProfile} from '../../../shared/store/selectors/userProfile.selector';
import {selectJobOffersList} from '../../../shared/store/selectors/jobOffers.selector';
import {SaveProfile} from '../../../shared/store/actions/userProfile.actions';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})

export class OffersDetailComponent implements OnInit {

  offer: Offer;
  user: User;

    userProfile$ = this._store.pipe(select(selectUserProfile));
    userProfile: User;

    jobOffers$ = this._store.pipe(select(selectJobOffersList));
    jobOffers: Offer[];

  constructor(
      private _store: Store<IAppState>,
      // private profileService: ProfileService,
      // private offersService: OffersService,
      private route: ActivatedRoute,
      private router: Router
  ) {

      this.userProfile$.subscribe(userProfile => this.userProfile = userProfile);
      this.jobOffers$.subscribe(jobOffers => this.jobOffers = jobOffers);

      // this.user = this.profileService.user;

      this.route.params.subscribe(params => {
          // const offers = this.offersService.offers;
          const offerID = +params.id;
          this.offer = (this.jobOffers.find(offer => offer.id === offerID) || {}) as Offer;
      });
  }

  subscribeOffer() {
      // this.user.offers = [...this.user.offers, this.offer];
        this.userProfile.offers = [...this.userProfile.offers, this.offer];

        this._store.dispatch(new SaveProfile(this.userProfile));

        this.router.navigate(['/admin/profile']);
  }

  unsubscribeOffer() {
        this.userProfile.offers = this.userProfile.offers.filter(
          _offer => _offer.id !== this.offer.id
        );

      this._store.dispatch(new SaveProfile(this.userProfile));

      this.router.navigate(['/admin/profile']);
  }

  isSubscribe(): boolean {
      return !!this.userProfile.offers.find(_offer => this.offer.id === _offer.id);
  }

  ngOnInit() {}
}
