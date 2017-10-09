import { RouterExtensions } from 'nativescript-angular/router';
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as Auth from '../actions/Auth';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BaseAuthService } from '../services/auth.service';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import { LoginSuccessUrlToken } from '../tokens';

@Injectable()
export class AuthEffects {

    @Effect()
    login$: Observable<Action> = this.actions$
        .ofType(Auth.LOGIN)
        .map(toPayload)
        .switchMap(payload =>
            this.authService.login(payload)
                .map(authUser => new Auth.LoginSuccess(authUser))
                .catch(error => of(new Auth.LoginFailed(error)))
        );

    @Effect({ dispatch: false })
    loginSuccess = this.actions$
        .ofType(Auth.LOGIN_SUCCESS)
        .map(() => this.routerExt.navigate([this.loginSuccesUrl, { clearHistory: true }]))
        .map(() => empty());

    @Effect()
    logout$: Observable<Action> = this.actions$
        .ofType(Auth.LOGOUT)
        .switchMap(() =>
            this.authService.logout()
                .map(() => new Auth.LogoutSuccess)
                .catch(() => of(new Auth.LogoutSuccess))
        );

    constructor(
        private authService: BaseAuthService,
        private routerExt: RouterExtensions,
        private actions$: Actions,
        @Inject(LoginSuccessUrlToken) private loginSuccesUrl: string) { }
}
