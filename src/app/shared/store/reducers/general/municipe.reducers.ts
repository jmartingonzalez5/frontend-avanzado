import { EMunicipeActions, MunicipeActions } from './../../actions/general/municipe.actions';
import { initialMunicipeState, IMunicipeState } from '../../state/general/municipe.state';

export const municipeReducers = (
    state = initialMunicipeState,
    action: MunicipeActions
): IMunicipeState => {
    switch (action.type) {
        case EMunicipeActions.GetMunicipesSuccess: {
            return {
                ...state,
                municipes: action.payload
            };
        }
        default:
            return state;
    }
};

