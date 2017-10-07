import { Action } from '@ngrx/store';

export const PRIMARY_ICON = '[Page] Primary Icon';
export const PRIMARY_ACTION = '[Page] Primary Action';
export const PRIMARY_ACTION_COMPLETE = '[Page] Primary Action Complete';

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

export type Actions
    = PrimaryIcon
    | PrimaryAction
    | PrimaryActionComplete;
