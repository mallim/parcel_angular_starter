import { UsersActions } from '../actions/users.actions';
import { User } from '../model/users';

const INITIAL_STATE: User[] = [ ];

const FAKE_DATA: User[] = [
  { id: 1, name: 'Fabio' },
  { id: 2, name: 'Lorenzo' },
  { id: 3, name: 'Silvia' },
];

export function UsersReducer(state: User[] = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case UsersActions.USERS_GET:
      return [...FAKE_DATA];

    case UsersActions.USERS_DELETE:
      return state.filter(({ id }) => id !== action.payload.id);

    default:
      return state;
  }
}
