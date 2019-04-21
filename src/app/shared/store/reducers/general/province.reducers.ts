import {EProvinceActions, ProvinceActions} from './../../actions/general/province.actions';
import {initialProvinceState, IProvinceState} from '../../state/general/province.state';

export const provinceReducers = (
    state = initialProvinceState,
    action: ProvinceActions
): IProvinceState => {
    switch (action.type) {
        case EProvinceActions.GetProvincesSuccess: {
            return {
                ...state,
                provinces: action.payload
            };
        }
        default:
            return state;
    }
};

