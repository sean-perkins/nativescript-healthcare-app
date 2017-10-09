import { RouterExtensions } from 'nativescript-angular/router';
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as Auth from '../actions/auth';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BaseAuthService } from '../services/auth.service';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import * as tokens from '../tokens';

@Injectable()
export class AuthEffects {

    @Effect()
    login$: Observable<Action> = this.actions$
        .ofType(Auth.LOGIN)
        .map(toPayload)
        .switchMap(payload =>
            this.authService.login(payload)
                .map(authUser => {
                    this.routerExt.navigate([this.loginSuccesUrl, {
                        clearHistory: true
                    }]);
                    return new Auth.LoginSuccess(authUser);
                })
                .catch(error => of(new Auth.LoginFailed(error)))
        );

    @Effect()
    logout$: Observable<Action> = this.actions$
        .ofType(Auth.LOGOUT)
        .switchMap(() =>
            this.authService.logout()
                .map(() => {
                    this.routerExt.navigate([this.logoutSuccessUrl], {
                        clearHistory: true
                    });
                    return new Auth.LogoutSuccess;
                })
                .catch(() => of(new Auth.LogoutSuccess))
        );

    constructor(
        private authService: BaseAuthService,
        private routerExt: RouterExtensions,
        private actions$: Actions,
        @Inject(tokens.LoginSuccessUrlToken) private loginSuccesUrl: string,
        @Inject(tokens.LogoutSuccessUrlToken) private logoutSuccessUrl: string) { }
}
