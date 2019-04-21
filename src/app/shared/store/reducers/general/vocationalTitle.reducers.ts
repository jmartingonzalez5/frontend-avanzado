import {EVocationalTitleActions, VocationalTitleActions} from './../../actions/general/vocationalTitle.actions';
import {initialVocationalTitleState, IVocationalTitleState} from '../../state/general/vocationalTitle.state';

export const vocationalTitleReducers = (
    state = initialVocationalTitleState,
    action: VocationalTitleActions
): IVocationalTitleState => {
    switch (action.type) {
        case EVocationalTitleActions.GetVocationalTitlesSuccess: {
            return {
                ...state,
                vocationalTitles: action.payload
            };
        }
        default:
            return state;
    }
};


