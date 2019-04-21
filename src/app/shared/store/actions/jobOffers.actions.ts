
import { Action } from '@ngrx/store';
import {Offer} from '../../models/offer.model';

export enum EJobOffersActions {
    GetJobOffers = '[JobOffers] Get Job Offers',
    GetJobOffersSuccess = '[JobOffers] Get Job Offers Success'
}


export class GetJobOffers implements Action {
    public readonly type = EJobOffersActions.GetJobOffers;
}

export class GetJobOffersSuccess implements Action {
    public readonly type = EJobOffersActions.GetJobOffersSuccess;
    constructor(public payload: Offer[]) {}
}

export type JobOffersActions = GetJobOffers | GetJobOffersSuccess;
