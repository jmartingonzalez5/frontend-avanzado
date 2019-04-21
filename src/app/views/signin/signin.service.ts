/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';

@Injectable()
export class SigninService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS).toPromise();
  }

    async login({ email, password }): Promise<any> {
        const users = await this.getUsers();
        // Mock response from backend:
        return users.find(
            (user: any) => user.email === email && user.password === password
        );
    }
}
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { of, throwError } from 'rxjs';
import { Credential } from '../../shared/models/auth.model';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../shared/store/state/app.state';
import {selectUserList} from '../../shared/store/selectors/auth.selector';
import {User} from '../../shared/models/user.model';



@Injectable({
    providedIn: 'root',
})

export class SigninService {

    users: User[];

    constructor(private http: HttpClient,
                private _store: Store<IAppState>) {}

    async login({ email, password }: Credential): Promise<any> {

        this._store.pipe(select(selectUserList)).subscribe(users => this.users = users);

        const userFind = this.users.find(
            (user: any) => user.email === email && user.password === password
        );

        if (userFind === undefined) {
            return throwError('Invalid username or password');
        }
        return userFind;
    }

    logout() {
        return of(true);
    }
}

