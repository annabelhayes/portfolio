import { Action } from '@ngrx/store';

/*
 Layout actions are defined here
 */

export const HOVER = 'app/layout/HOVER';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class HoverAction implements Action {
  readonly type = HOVER;
  public payload: any;

  constructor(key: string, value: string) {
    this.payload = { key, value };
  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  | HoverAction;

