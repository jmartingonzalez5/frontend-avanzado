import {User} from '../../models/user.model';

export interface IAuthState {
    user: User;
    users: User[];
}

export const initialAuthState: IAuthState = {
    user: null,
    users: null
};
