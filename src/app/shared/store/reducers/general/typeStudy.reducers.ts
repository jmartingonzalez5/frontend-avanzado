import {ETypeStudyActions, TypeStudyActions} from './../../actions/general/typeStudy.actions';
import {initialTypeStudyState, ITypeStudyState} from '../../state/general/typeStudy.state';

export const typeStudyReducers = (
    state = initialTypeStudyState,
    action: TypeStudyActions
): ITypeStudyState => {
    switch (action.type) {
        case ETypeStudyActions.GetTypeStudiesSuccess: {
            return {
                ...state,
                typeStudies: action.payload
            };
        }
        default:
            return state;
    }
};

