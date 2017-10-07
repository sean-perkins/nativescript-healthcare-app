
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as Page from '../actions/page';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageEffects {

    @Effect()
    barIconTapped$: Observable<Action> = this.actions$
        .ofType(Page.PRIMARY_ACTION)
        .map(res => {
            return new Page.PrimaryActionComplete();
        });

    constructor(
        private actions$: Actions
    ) { }
}
