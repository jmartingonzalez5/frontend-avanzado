import {Offer} from '../../models/offer.model';

export interface IJobOffersState {
    jobOffers: Offer[];
}

export const initialJobOffersState: IJobOffersState = {
    jobOffers: null
};
