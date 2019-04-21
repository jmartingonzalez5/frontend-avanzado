import {EVocationalGradeActions, VocationalGradeActions} from './../../actions/general/vocationalGrade.actions';
import {initialVocationalGradeState, IVocationalGradeState} from '../../state/general/vocationalGrade.state';

export const vocationalGradeReducers = (
    state = initialVocationalGradeState,
    action: VocationalGradeActions
): IVocationalGradeState => {
    switch (action.type) {
        case EVocationalGradeActions.GetVocationalGradesSuccess: {
            return {
                ...state,
                vocationalGrades: action.payload
            };
        }
        default:
            return state;
    }
};
