import { DocumentType } from '../../../models/user.model';

export interface IDocumentTypeState {
    documentsType: DocumentType[];
}

export const initialDocumentTypeState: IDocumentTypeState = {
    documentsType: null
};
