import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { IProvinceState } from '../../state/general/province.state';

const provinceState = (state: IAppState) => state.provinces;


export const selectProvincesList = createSelector(
    provinceState,
    (state: IProvinceState) => state.provinces
);
