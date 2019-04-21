import { createSelector } from '@ngrx/store';

import { IAppState } from '../../state/app.state';
import { IDocumentTypeState } from '../../state/general/documentType.state';

const documentTypeState = (state: IAppState) => state.documentsType;


export const selectDocumentTypeList = createSelector(
    documentTypeState,
    (state: IDocumentTypeState) => state.documentsType
);
