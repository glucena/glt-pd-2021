import { Action } from '@ngrx/store';

export const SHIP_LIST = '[Ships]';

export class ShipList implements Action {
    readonly type = SHIP_LIST;

    constructor(
        public payload: any
    ) {}
}

export type ShipsActions = ShipList;
