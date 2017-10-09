import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth';
import * as fromRoot from '../../core/reducers';

export interface CommonState extends fromRoot.State {
    auth: fromAuth.State;
}

export const reducers = {
    auth: fromAuth.reducer
};

export const getCommonState = createFeatureSelector<CommonState>('common');

export const getAuthState = createSelector(getCommonState, (state: CommonState) => state.auth);

export const isLoggedIn = createSelector(getAuthState, fromAuth.isLoggedIn);
export const getAuthUser = createSelector(getAuthState, fromAuth.getAuthUser);
