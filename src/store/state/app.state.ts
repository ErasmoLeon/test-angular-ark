import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}

// https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc