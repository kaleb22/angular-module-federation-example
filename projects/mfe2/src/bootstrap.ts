import { importProvidersFrom } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app/app.component';
import { MFE2_ROUTES } from './app/mfe2.routes';

(async () => {

  const app = await createApplication({
    providers: [
      importProvidersFrom(RouterModule.forRoot(MFE2_ROUTES))
    ]
  });
  const el = createCustomElement(AppComponent, { injector: app.injector });

  customElements.define('mfe2-web-component', el);
})();
