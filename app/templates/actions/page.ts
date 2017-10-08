import { Action } from '@ngrx/store';

export const PRIMARY_ICON = '[Page] Primary Icon';
export const PRIMARY_ACTION = '[Page] Primary Action';
export const PRIMARY_ACTION_COMPLETE = '[Page] Primary Action Complete';

export const ACTIVE_WIDGET = '[Page] Active Widget';

export class PrimaryIcon implements Action {
    readonly type = PRIMARY_ICON;
    constructor(public payload: string) { }
}

export class PrimaryAction implements Action {
    readonly type = PRIMARY_ACTION;
}

export class PrimaryActionComplete implements Action {
    readonly type = PRIMARY_ACTION_COMPLETE;
}

export class ActiveWidget implements Action {
    readonly type = ACTIVE_WIDGET;
    constructor(public payload: any) { }
}

export type Actions
    = PrimaryIcon
    | PrimaryAction
    | PrimaryActionComplete
    | ActiveWidget;
