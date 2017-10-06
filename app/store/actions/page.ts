import { Action } from '@ngrx/store';

export const SET_BAR_ICON = '[Page] Set Bar Icon';
export const BAR_ICON_PRESSED = '[Page] Bar Icon Pressed';

export class SetBarIcon implements Action {
    readonly type = SET_BAR_ICON;
    constructor(public payload: string) { }
}

export class BarIconPressed implements Action {
    readonly type = BAR_ICON_PRESSED;
}

export type Actions
    = SetBarIcon
    | BarIconPressed;
