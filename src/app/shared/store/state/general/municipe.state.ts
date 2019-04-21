import { Municipe } from '../../../models/user.model';

export interface IMunicipeState {
    municipes: Municipe[];
}

export const initialMunicipeState: IMunicipeState = {
    municipes: null
};
