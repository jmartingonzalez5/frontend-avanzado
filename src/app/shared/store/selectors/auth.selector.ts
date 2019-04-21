import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

const authState = (state: IAppState) => state.auth;


export const selectUser = createSelector(
    authState,
    (state: IAuthState) => state.user
);

export const selectUserList = createSelector(
    authState,
    (state: IAuthState) => state.users
);


