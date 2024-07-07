import { Component } from '@angular/core';
import { Template, Editor, ColumnRegular, Editors } from 'angular-datagrid';
import { CellComponent } from './cell/cell.component';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'app-root',
  template: `<revo-grid [source]="source" [columns]="columns" [editors]="editors"></revo-grid>`,
})
export class AppComponent {
  source: any[] = [  {
    name: '1',
    details: 'Item 1',
  }];
  columns: ColumnRegular[] = [];
  editors: Editors = {};

  constructor() {
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
    const MY_EDITOR = 'custom-editor';
    this.columns = [
      {
        prop: 'name',
        name: 'First',
        editor: MY_EDITOR,
        cellTemplate: Template(CellComponent),
      },
      {
        prop: 'details',
        name: 'Second',
      },
    ];
    this.editors = { [MY_EDITOR]: Editor(EditorComponent) };
  }
}
