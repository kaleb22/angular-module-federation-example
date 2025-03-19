import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { MFE2_ROUTES } from './app/mfe2.routes';
import { createCustomElement } from '@angular/elements';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(RouterModule.forRoot(MFE2_ROUTES))
//   ]
// });

(async () => {

  const app = await createApplication({
    providers: [
      importProvidersFrom(RouterModule.forRoot(MFE2_ROUTES))
    ]
  });
  const el = createCustomElement(AppComponent, { injector: app.injector });

  customElements.define('mfe2-web-component', el);
})();
