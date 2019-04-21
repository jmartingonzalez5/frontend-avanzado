import {EVocationalInstitutionActions, VocationalInstitutionActions} from './../../actions/general/vocationalInstitution.actions';
import {initialVocationalInstitutionState, IVocationalInstitutionState} from '../../state/general/vocationalInstitution.state';

export const vocationalInstitutionReducers = (
    state = initialVocationalInstitutionState,
    action: VocationalInstitutionActions
): IVocationalInstitutionState => {
    switch (action.type) {
        case EVocationalInstitutionActions.GetVocationalInstitutionsSuccess: {
            return {
                ...state,
                vocationalInstitutions: action.payload
            };
        }
        default:
            return state;
    }
};


