import { NgModule } from "@angular/core";
import { defineCustomElements } from "@revolist/revogrid/loader";

import { RevoGrid } from "./revogrid";

defineCustomElements(window);

const DECLARATIONS = [
  RevoGrid
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class RevoGridModule { }
