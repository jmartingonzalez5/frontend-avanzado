import { Province } from '../../../models/user.model';

export interface IProvinceState {
    provinces: Province[];
}

export const initialProvinceState: IProvinceState = {
    provinces: null
};
