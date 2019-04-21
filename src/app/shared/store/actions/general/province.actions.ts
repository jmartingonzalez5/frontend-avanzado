import { Action } from '@ngrx/store';
import { Province } from '../../../models/user.model';

export enum EProvinceActions {
    GetProvincesLevel = '[Province] Get Provinces',
    GetProvincesSuccess = '[Province] Get Provinces Success'
}

export class GetProvinces implements Action {
    public readonly type = EProvinceActions.GetProvincesLevel;
}

export class GetProvincesSuccess implements Action {
    public readonly type = EProvinceActions.GetProvincesSuccess;
    constructor(public payload: Province[]) {}
}

export type ProvinceActions = GetProvinces | GetProvincesSuccess;

