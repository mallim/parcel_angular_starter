import { combineReducers } from 'redux';
import { UsersReducer } from './users.reducer';
import { ConfigReducer } from './config.reducer';
import { User } from '../model/users';

export class IAppState {
  users: User[];
  config;
}

export const rootReducer = combineReducers<IAppState>({
  users: UsersReducer,
  config: ConfigReducer,
});
