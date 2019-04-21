import { Action } from '@ngrx/store';
import {User} from '../../models/user.model';

export enum EUserProfileActions {
    LoadProfile = '[UserProfile] Load Profile',
    LoadProfileSuccess = '[UserProfile] Load Profile Success',
    SaveProfile = '[UserProfile] Save Profile',
    SaveProfileSuccess = '[UserProfile] Save Profile Success',
}


export class LoadProfile implements Action {
    public readonly type = EUserProfileActions.LoadProfile;
}

export class LoadProfileSuccess implements Action {
    public readonly type = EUserProfileActions.LoadProfileSuccess;
    constructor(public payload: User) {}
}

export class SaveProfile implements Action {
    public readonly type = EUserProfileActions.SaveProfile;
    constructor(public payload: User) {}
}

export class SaveProfileSuccess implements Action {
    public readonly type = EUserProfileActions.SaveProfileSuccess;
    constructor(public payload: User) {}
}


export type UserProfileActions = LoadProfile | LoadProfileSuccess | SaveProfile | SaveProfileSuccess;
