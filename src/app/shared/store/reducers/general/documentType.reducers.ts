import { EDocumentTypeActions, DocumentTypeActions } from './../../actions/general/documentType.actions';
import { initialDocumentTypeState, IDocumentTypeState } from '../../state/general/documentType.state';

export const documentTypeReducers = (
    state = initialDocumentTypeState,
    action: DocumentTypeActions
): IDocumentTypeState => {
    switch (action.type) {
        case EDocumentTypeActions.GetDocumentsTypeSuccess: {
            return {
                ...state,
                documentsType: action.payload
            };
        }
        default:
            return state;
    }
};

/*
import { Action } from '@ngrx/store';
import { DocumentType } from '../../../models/user.model';
import { DocumentTypeActions } from '../actions/documentType.actions';


export type DocumentTypeState = DocumentType;

const initialState: DocumentTypeState = {
    uid: 0,
    name: ''
};

export default function (state = initialState, action: Action): DocumentTypeState {
    switch (action.type) {
        case DocumentTypeActions.LOAD_DOCUMENTS_TYPE_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
*/