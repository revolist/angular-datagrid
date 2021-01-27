import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {defineCustomElements} from '@revolist/revogrid/loader';
import {RevoGrid} from '@revolist/angular-datagrid';
import { AppComponent } from './app.component';

defineCustomElements();
@NgModule({
  declarations: [AppComponent, RevoGrid],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
