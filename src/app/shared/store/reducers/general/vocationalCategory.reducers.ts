import { EVocationalCategoryActions, VocationalCategoryActions } from './../../actions/general/vocationalCategory.actions';
import { initialVocationalCategoryState, IVocationalCategoryState } from '../../state/general/vocationalCategory.state';

export const vocationalCategoryReducers = (
    state = initialVocationalCategoryState,
    action: VocationalCategoryActions
): IVocationalCategoryState => {
    switch (action.type) {
        case EVocationalCategoryActions.GetVocationalCategoriesSuccess: {
            return {
                ...state,
                vocationalCategories: action.payload
            };
        }
        default:
            return state;
    }
};

