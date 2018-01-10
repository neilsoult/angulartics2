import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

import {
  Angulartics2,
  Angulartics2OnModule,
  Angulartics2Settings,
  ANGULARTICS2_TOKEN,
  RouterlessTracking,
} from 'angulartics2';

@NgModule({
  imports: [Angulartics2OnModule],
})
export class Angulartics2RouterlessModule {
  static forRoot(
    providers: Provider[],
    settings: Partial<Angulartics2Settings> = {},
  ): ModuleWithProviders {
    return {
      ngModule: Angulartics2RouterlessModule,
      providers: [
        { provide: ANGULARTICS2_TOKEN, useValue: { providers, settings } },
        RouterlessTracking,
        Angulartics2,
        ...providers,
      ],
    };
  }
}
