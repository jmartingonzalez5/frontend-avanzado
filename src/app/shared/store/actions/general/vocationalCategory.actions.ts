import { Action } from '@ngrx/store';
import { Category } from '../../../models/study.model';

export enum EVocationalCategoryActions {
    GetVocationalCategories = '[VocationalCategory] Get Vocational Categories',
    GetVocationalCategoriesSuccess = '[VocationalCategory] Get Vocational Categories Success'
}

export class GetVocationalCategories implements Action {
    public readonly type = EVocationalCategoryActions.GetVocationalCategories;
}

export class GetVocationalCategoriesSuccess implements Action {
    public readonly type = EVocationalCategoryActions.GetVocationalCategoriesSuccess;
    constructor(public payload: Category[]) {}
}

export type VocationalCategoryActions = GetVocationalCategories | GetVocationalCategoriesSuccess;

