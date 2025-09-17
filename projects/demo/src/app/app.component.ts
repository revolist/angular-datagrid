import { Component } from '@angular/core';
import { Template, Editor, ColumnRegular, Editors, RevoGrid } from 'angular-datagrid';
import { CellComponent } from './cell/cell.component';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RevoGrid],
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
    this.source = Array.from({ length: 100 }, (_, i) => ({
      name: (i + 1).toString(),
      details: `Item ${i + 1}`
    }));
    const MY_EDITOR = 'custom-editor';
    this.columns = [
      {
        prop: 'name',
        name: 'First',
        sortable: true,
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
