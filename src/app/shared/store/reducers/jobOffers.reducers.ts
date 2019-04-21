import {EJobOffersActions, JobOffersActions} from '../actions/jobOffers.actions';
import {IJobOffersState, initialJobOffersState} from '../state/jobOffers.state';

export const jobOffersReducers = (
    state = initialJobOffersState,
    action: JobOffersActions
): IJobOffersState => {
    switch (action.type) {
        case EJobOffersActions.GetJobOffersSuccess: {
            return {
                ...state,
                jobOffers: action.payload
            };
        }
        default:
            return state;
    }
};
