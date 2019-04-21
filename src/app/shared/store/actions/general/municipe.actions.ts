import { Action } from '@ngrx/store';
import { Municipe } from '../../../models/user.model';

export enum EMunicipeActions {
    GetMunicipes = '[Municipes] Get Municipes',
    GetMunicipesSuccess = '[Municipes] Get Municipes Success'
}

export class GetMunicipes implements Action {
    public readonly type = EMunicipeActions.GetMunicipes;
}

export class GetMunicipesSuccess implements Action {
    public readonly type = EMunicipeActions.GetMunicipesSuccess;
    constructor(public payload: Municipe[]) {}
}

export type MunicipeActions = GetMunicipes | GetMunicipesSuccess;

