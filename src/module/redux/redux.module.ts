import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState } from './store/index';
import { ConfigActions } from './actions/config.actions'
import { UsersActions } from './actions/users.actions'
import { AppComponent } from './redux.component';

@NgModule({
  imports: [NgReduxModule, BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent],
  providers: [UsersActions, ConfigActions],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, private devTool: DevToolsExtension) {
    this.ngRedux.configureStore(rootReducer, {} as IAppState, [], [devTool.isEnabled() ? devTool.enhancer() : f => f]);
  }
}
