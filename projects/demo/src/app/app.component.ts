import { Component, Injector } from '@angular/core';
import { ColumnRegular, Editors } from '@revolist/revogrid';
import { Template, Editor } from '@revolist/angular-datagrid';
import { CellComponent } from './cell/cell.component';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'app-root',
  template: `<revo-grid [source]="source" [columns]="columns" [editors]="editors"/>`,
})
export class AppComponent {
  source: any[] = [];
  columns: ColumnRegular[] = [];
  editors: Editors = {};

  constructor(private ref: Injector) {
    const MY_EDITOR = 'custom-editor';
    this.source = [
      {
        name: '1',
        details: 'Item 1',
      },
      {
        name: '2',
        details: 'Item 2',
      },
    ];
    this.columns = [
      {
        prop: 'name',
        name: 'First',
        editor: MY_EDITOR,
        cellTemplate: Template(CellComponent, ref),
      },
      {
        prop: 'details',
        name: 'Second',
      },
    ];


    this.editors = { [MY_EDITOR]: Editor(EditorComponent, ref) };
  }
}
