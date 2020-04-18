import { Action } from '@ngrx/store';

/*
 Layout actions are defined here
 */

export const HEADING = 'app/layout/HEADING';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class HeadingAction implements Action {
  readonly type = HEADING;
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
  | HeadingAction;

