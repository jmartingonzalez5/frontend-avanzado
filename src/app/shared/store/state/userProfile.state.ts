import {User} from '../../models/user.model';

export interface IUserProfileState {
    userProfile: User;
}

export const initialUserProfileState: IUserProfileState = {
    userProfile: null
};
