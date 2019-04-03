import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { User } from './model/users';
import { UsersActions } from './actions/users.actions';
import { ConfigActions } from './actions/config.actions';

@Component({
  selector: 'my-app',
  template: `
    <div [style.backgroundColor]="(config$ | async).theme">
      THEME : {{ (config$ | async).theme }} SIZE : {{ (config$ | async).size }}

      <hr />

      <button class="btn btn-xs pull-right" (click)="configActions.updateConfig({ size: 'big' })">
        ADD SIZE
      </button>

      <button class="btn btn-xs pull-right" (click)="configActions.updateConfig({ theme: 'pink' })">
        UPDATE THEME
      </button>

      <button class="btn btn-xs pull-right" (click)="configActions.updateConfig({ theme: null })">
        RESET THEME
      </button>

      TOTAL USER: {{ (users$ | async).length }}
    </div>
  `,
})
export class AppComponent {
  @select('users') public users$: Observable<User>;
  @select('config') public config$: Observable<any>;

  constructor(public actions: UsersActions, public configActions: ConfigActions) {
    actions.getUsers();
  }
}
