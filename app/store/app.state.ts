import { ActionReducer, compose } from '@ngrx/store';
import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromPage from './reducers/page';

export interface State {
    page: fromPage.State;
};

export const reducers: ActionReducerMap<State> = {
    page: fromPage.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        // TODO add logging here if you want to see state and actions
        return reducer(state, action);
    };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];

/**
 * Page Reducers
 */
export const getPageState = createFeatureSelector<fromPage.State>('page');
export const getBarIcon = createSelector(getPageState, fromPage.getBarIcon);
