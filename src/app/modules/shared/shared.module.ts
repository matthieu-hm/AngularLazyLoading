import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrucsService } from './services/trucs.service';

import { UselessComponent } from './component/useless/useless.component';

const providers = [
  TrucsService,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UselessComponent],
  exports: [UselessComponent],
  providers: [
    // Providers should be set below (in forRoot())
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: [
            ...providers,
        ],
    };
  }

  static forChild(): ModuleWithProviders {
      return {
          ngModule: SharedModule,
      };
  }
}
