import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './module/login/login.module';
import { enableProdMode } from '@angular/core';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherise, log the boot error
  })
  .catch(err => console.log(err));
