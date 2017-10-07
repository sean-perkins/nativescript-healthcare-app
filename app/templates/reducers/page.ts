import * as page from '../actions/page';

export interface State {
    primaryIcon: string;
}

const initialState: State = {
    primaryIcon: undefined,
};

export function reducer(state = initialState, action: page.Actions): State {
    switch (action.type) {
        case page.PRIMARY_ICON:
            return {
                primaryIcon: action.payload,
            };
        default:
            return state;
    }
}

export const getPrimaryIcon = (state: State) => state.primaryIcon;
