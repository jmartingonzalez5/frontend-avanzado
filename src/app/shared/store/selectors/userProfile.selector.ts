import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUserProfileState } from '../state/userProfile.state';

const userProfileState = (state: IAppState) => state.userProfile;

export const selectUserProfile = createSelector(
    userProfileState,
    (state: IUserProfileState) => state.userProfile
);
