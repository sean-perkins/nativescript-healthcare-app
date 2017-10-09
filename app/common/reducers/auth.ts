import * as auth from '../actions/auth';

export interface State {
    // If the user is logged in
    loggedIn: boolean;
    // The authenticated user reference
    authUser: any;
    // The authenticated user's OAUTH2 token
    authToken: string;
    // The authenticated user's refresh token for OAUTH2
    refreshToken: string;
}

const initialState: State = {
    loggedIn: false,
    authUser: undefined,
    authToken: undefined,
    refreshToken: undefined
};

export function reducer(state = initialState, action: auth.Actions): State {
    switch (action.type) {
        case auth.LOGOUT:
            return Object.assign({}, state, {
                authUser: undefined,
                authToken: undefined,
                refreshToken: undefined,
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
export const getAuthToken = (state: State) => state.authToken;
export const getAuthRefreshToken = (state: State) => state.refreshToken;
