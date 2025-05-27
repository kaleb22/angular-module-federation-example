import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { MFE1_ROUTES } from './app/mfe1.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(MFE1_ROUTES)),
    provideHttpClient()
  ]
});
