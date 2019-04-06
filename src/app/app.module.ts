import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const STATES = [{ name: 'hello', url: '/hello', component: HelloComponent }];

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, UIRouterModule.forRoot({ states: STATES })],
  providers: [],
  bootstrap: [AppComponent, HelloComponent],
})
export class AppModule {}
