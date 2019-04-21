
import { initialUserProfileState, IUserProfileState } from '../state/userProfile.state';
import {EUserProfileActions, UserProfileActions} from '../actions/userProfile.actions';

export const userProfileReducers = (
    state = initialUserProfileState,
    action: UserProfileActions
): IUserProfileState => {
    switch (action.type) {
        case EUserProfileActions.LoadProfileSuccess: {
            return {
                ...state,
                userProfile: action.payload
            };
        }
        case EUserProfileActions.SaveProfileSuccess: {
            return {
                ...state,
                userProfile: action.payload
            };
        }
        default:
            return state;
    }
};
