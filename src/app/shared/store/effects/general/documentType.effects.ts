import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
    EDocumentTypeActions,
    GetDocumentsType,
    GetDocumentsTypeSuccess
} from '../../actions/general/documentType.actions';
import {GeneralService} from '../../../services/general.service';


@Injectable()
export class DocumentTypeEffects {
    @Effect()
    getDocumentsType = this._actions$.pipe(
        ofType<GetDocumentsType>(EDocumentTypeActions.GetDocumentsType),
        switchMap(() => this._generalService.getDocumentsType()),
        switchMap(documentTypes => of(new GetDocumentsTypeSuccess(documentTypes)))
    );

    constructor(
        private _generalService: GeneralService,
        private _actions$: Actions
    ) {}
}

