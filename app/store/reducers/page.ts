import * as page from '../actions/page';

export interface State {
    barIcon: string;
}

const initialState: State = {
    barIcon: undefined,
};

export function reducer(state = initialState, action: page.Actions): State {
    switch (action.type) {
        case page.SET_BAR_ICON:
            return {
                barIcon: action.payload,
            };
        default:
            return state;
    }
}

export const getBarIcon = (state: State) => state.barIcon;
