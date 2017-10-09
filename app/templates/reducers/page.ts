import * as page from '../actions/page';

export interface State {
    primaryIcon: string;
    activeWidget: any;
    hasBack: boolean;
    transparentActionBar: boolean;
}

const initialState: State = {
    primaryIcon: undefined,
    activeWidget: undefined,
    hasBack: true,
    transparentActionBar: false
};

export function reducer(state = initialState, action: page.Actions): State {
    switch (action.type) {
        case page.ACTION_BAR:
            const actionBar = action.payload.actionBar;
            return Object.assign({}, state, {
                primaryIcon: actionBar ? actionBar.rightIcon : undefined,
                hasBack: !!action.payload.hasBack
            });
        case page.ACTIVE_WIDGET:
            return Object.assign({}, state, {
                activeWidget: action.payload
            });
        case page.ACTION_BAR_TRANSPARENT:
            return Object.assign({}, state, {
                transparentActionBar: !!action.payload
            });
        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export const getPrimaryIcon = (state: State) => state.primaryIcon;
export const getActiveWidget = (state: State) => state.activeWidget;
export const hasBack = (state: State) => state.hasBack;
export const hasTransparentActionBar = (state: State) => state.transparentActionBar;
