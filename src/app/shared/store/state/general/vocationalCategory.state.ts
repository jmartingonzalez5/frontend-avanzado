import { Category } from '../../../models/study.model';

export interface IVocationalCategoryState {
    vocationalCategories: Category[];
}

export const initialVocationalCategoryState: IVocationalCategoryState = {
    vocationalCategories: null
};
