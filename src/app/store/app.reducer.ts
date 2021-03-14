import { ShipsActions, SHIP_LIST } from './actions/ships.action';

export interface AppState {
    ships: any;
}

export const initialState = {
    ships: {}
};

export function reducer(state: AppState = initialState, action: ShipsActions) {
    switch (action.type) {
        case SHIP_LIST:
            return {
                ...state,
                ships: action.payload
            };

        default:
            return state;
    }
}
