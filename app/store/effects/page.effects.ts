
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';
import { State } from '../app.state';

import * as pageActions from '../actions/page';
import { empty } from 'rxjs/observable/empty';

@Injectable()
export class PageEffects {

    // @Effect() addMatch$: Observable<Action> = this.actions$
    //     .ofType(MatchState.ActionTypes.ADD)
    //     .switchMap(({ payload }) =>
    //         this.storage.appendMatch(payload)
    //             .map(res => new matchActions.AddSuccessAction)
    //             .catch(error => of(new matchActions.AddFailedAction(error)))
    //     );

    constructor(
        private actions$: Actions,
        private store$: Store<State>
    ) { }
}
