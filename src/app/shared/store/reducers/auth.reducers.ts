import { EAuthActions, AuthActions } from './../actions/auth.actions';
import { initialAuthState, IAuthState } from '../state/auth.state';
import {EDocumentTypeActions} from '../actions/general/documentType.actions';

export const authReducers = (
    state = initialAuthState,
    action: AuthActions
): IAuthState => {
    switch (action.type) {
        case EAuthActions.GetMockUserSuccess: {
            return {
                ...state,
                user: action.payload
            };
        }
        case EAuthActions.GetUsersSuccess: {
            return {
                 ...state,
                 users: action.payload
            };
        }
        case EAuthActions.LoginSuccess: {
            return {
                ...state,
                user: action.payload
            };
        }
        case EAuthActions.LogoutSuccess: {
                return initialAuthState;
        };

        default:
            return state;
    }
};
