import { NgModule } from "@angular/core";
import { defineCustomElements } from "@revolist/revogrid/loader";

import { RevoGrid } from "./proxies/revogrid";

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  RevoGrid
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class RevoGridModule {}
