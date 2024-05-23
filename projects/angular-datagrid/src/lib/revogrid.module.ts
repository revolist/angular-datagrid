import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@revolist/revogrid/loader';
import { DIRECTIVES } from './revogrid';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class RevogridModule {}