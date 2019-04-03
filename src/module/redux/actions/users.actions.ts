import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class UsersActions {
  static USERS_GET = 'USERS_GET';
  static USERS_DELETE = 'USERS_DELETE';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  getUsers() {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_GET,
    });
  }

  deleteUser(id): void {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_DELETE,
      payload: { id },
    });
  }
}
