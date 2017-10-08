import * as page from '../actions/page';

export interface State {
    primaryIcon: string;
    activeWidget: any;
}

const initialState: State = {
    primaryIcon: undefined,
    activeWidget: undefined
};

export function reducer(state = initialState, action: page.Actions): State {
    console.log('here', action.type);
    switch (action.type) {
        case page.PRIMARY_ICON:
            return Object.assign({}, state, {
                primaryIcon: action.payload,
            });
        case page.ACTIVE_WIDGET:
            return Object.assign({}, state, {
                activeWidget: action.payload
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
