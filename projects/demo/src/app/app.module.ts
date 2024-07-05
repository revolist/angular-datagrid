import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RevoGrid } from 'angular-datagrid';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RevoGrid,
    BrowserModule,
    CellComponent,
    EditorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
