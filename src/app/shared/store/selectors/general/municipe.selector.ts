import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { IMunicipeState } from '../../state/general/municipe.state';

const municipeState = (state: IAppState) => state.municipes;


export const selectMunicipesList = createSelector(
    municipeState,
    (state: IMunicipeState) => state.municipes
);
