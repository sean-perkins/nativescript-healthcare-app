import * as auth from '../actions/auth';

export interface State {
    loggedIn: boolean;
    authUser: any;
}

const initialState: State = {
    loggedIn: false,
    authUser: undefined
};

export function reducer(state = initialState, action: auth.Actions): State {
    switch (action.type) {
        case auth.LOGOUT:
            return Object.assign({}, state, {
                authUser: undefined,
                loggedIn: false
            });
        case auth.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                authUser: action.payload,
                loggedIn: true
            });
        default: {
            return state;
        }
    }
}

export const isLoggedIn = (state: State) => state.loggedIn;
export const getAuthUser = (state: State) => state.authUser;
