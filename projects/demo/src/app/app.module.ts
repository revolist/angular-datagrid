import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RevogridModule } from '@revolist/angular-datagrid';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    EditorComponent,
  ],
  imports: [
    RevogridModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
