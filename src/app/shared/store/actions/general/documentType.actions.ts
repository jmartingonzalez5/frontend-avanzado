import { Action } from '@ngrx/store';
import { DocumentType } from '../../../models/user.model';

export enum EDocumentTypeActions {
    GetDocumentsType = '[DocumentType] Get Documents Type',
    GetDocumentsTypeSuccess = '[DocumentType] Get Documents Type Success'
}

export class GetDocumentsType implements Action {
    public readonly type = EDocumentTypeActions.GetDocumentsType;
}

export class GetDocumentsTypeSuccess implements Action {
    public readonly type = EDocumentTypeActions.GetDocumentsTypeSuccess;
    constructor(public payload: DocumentType[]) {}
}

export type DocumentTypeActions = GetDocumentsType | GetDocumentsTypeSuccess;

