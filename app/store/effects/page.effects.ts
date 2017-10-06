
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as Page from '../actions/page';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageEffects {

    @Effect()
    barIconTapped$: Observable<Action> = this.actions$
        .ofType(Page.BAR_ICON_PRESSED)
        .map(res => {
            console.log('we are here!');
            // this.authService
            //     .login(auth)
            //     .map(user => new Page.LoginSuccess({ user }))
            //     .catch(error => of(new Page.LoginFailure(error)))
            return res;
        });

    @Effect()
    standardSignin$: Observable<Action> = this.actions$
        .do((action) => console.log(`Received ${action.type}`));

    constructor(
        private actions$: Actions
    ) { }
}
