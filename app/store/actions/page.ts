import { Action } from '@ngrx/store';

export const SET_BAR_ICON = '[Page] Set Bar Icon';

export class SetBarIcon implements Action {
    readonly type = SET_BAR_ICON;
    constructor(public payload: string) { }
}

export type Actions = SetBarIcon;
